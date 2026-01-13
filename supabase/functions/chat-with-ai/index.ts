import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiter (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(clientIP: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // 10 requests per minute per IP

  const entry = rateLimitMap.get(clientIP);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }
  
  if (entry.count >= maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  entry.count++;
  return { allowed: true };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please wait before sending more messages.' }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimit.retryAfter)
          } 
        }
      );
    }

    const { message, conversation } = await req.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required and must be a string' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit message length
    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Message too long. Maximum 1000 characters.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit conversation history
    const limitedConversation = Array.isArray(conversation) 
      ? conversation.slice(-10) // Keep only last 10 messages
      : [];

    const messages = [
      { 
        role: 'system', 
        content: `You are a helpful mortgage advisor assistant for Previse Mortgage. You help users understand mortgage options, answer questions about the application process, and guide them through mortgage-related topics. Be friendly, professional, and knowledgeable.

COMPANY INFORMATION:
- Previse Mortgage is a mortgage lending company specializing in helping families achieve homeownership
- We offer personalized guidance throughout the entire mortgage process
- Our team has 10+ years of experience in finance and mortgage lending
- We focus on providing hassle-free, honest mortgage advice

SERVICES:
- First-time homebuyer programs
- Refinancing options
- Conventional loans
- FHA loans
- VA loans (for military service members)
- USDA loans
- Jumbo loans

PROCESS:
1. Initial consultation to understand your needs
2. Pre-qualification assessment
3. Document gathering and application submission
4. Loan processing and underwriting
5. Final approval and closing coordination

KEY BENEFITS:
- Competitive rates and terms
- Fast processing times
- Personalized service from dedicated loan officers
- Support throughout the entire process
- Experience with various loan programs

Always encourage users to schedule a consultation or apply online for personalized assistance. Be helpful in explaining mortgage concepts but recommend speaking with our loan officers for specific rate quotes and detailed loan advice.` 
      },
      ...limitedConversation,
      { role: 'user', content: message }
    ];

    console.log(`Processing chat request from IP: ${clientIP}`);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (!data.choices || !data.choices[0]) {
      console.error('Unexpected OpenAI response:', data);
      return new Response(
        JSON.stringify({ error: 'Unable to generate response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    return new Response(
      JSON.stringify({ error: 'Unable to process your request. Please try again.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
