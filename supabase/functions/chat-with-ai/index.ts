import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversation } = await req.json();

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
      ...conversation,
      { role: 'user', content: message }
    ];

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
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});