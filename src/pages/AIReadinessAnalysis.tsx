import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Search, Bot, FileText, Shield } from "lucide-react";

const AIReadinessAnalysis = () => {
  const navigate = useNavigate();
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Current website analysis results
  const currentAnalysis = {
    overallScore: 62,
    categories: [
      {
        name: "Content Structure",
        score: 45,
        status: "needs-improvement",
        issues: [
          "FAQ questions lack detailed answers",
          "Missing specific service descriptions", 
          "No structured data markup",
          "Incomplete content in several sections"
        ],
        improvements: [
          "Add complete FAQ answers with specific details",
          "Structure content with clear headings and subheadings",
          "Implement FAQ schema markup",
          "Add comprehensive service descriptions"
        ]
      },
      {
        name: "Trust Signals",
        score: 70,
        status: "good",
        issues: [
          "Limited credentialing information",
          "No customer testimonials visible",
          "Missing licensing details"
        ],
        improvements: [
          "Add NMLS licensing information",
          "Include customer testimonials and reviews",
          "Add industry certifications and awards",
          "Display years of experience prominently"
        ]
      },
      {
        name: "AI Snippet Optimization",
        score: 55,
        status: "needs-improvement", 
        issues: [
          "Questions without answers won't be indexed",
          "Missing key mortgage terms and definitions",
          "No structured Q&A format",
          "Limited local market information"
        ],
        improvements: [
          "Create complete question-answer pairs",
          "Add glossary of mortgage terms",
          "Structure content for featured snippets",
          "Include Wichita/Kansas specific information"
        ]
      },
      {
        name: "Local SEO & Context",
        score: 75,
        status: "good",
        issues: [
          "Limited geographic context",
          "Missing local market data"
        ],
        improvements: [
          "Add Wichita market insights",
          "Include Kansas-specific loan programs",
          "Add local closing time statistics",
          "Reference local real estate market conditions"
        ]
      }
    ]
  };

  const improvements = [
    {
      title: "Complete FAQ Implementation",
      description: "Add comprehensive answers to all FAQ questions with specific details, requirements, and local context",
      impact: "High",
      aiToolsBenefited: ["ChatGPT", "Perplexity", "Gemini", "Claude"],
      status: "planned"
    },
    {
      title: "Structured Data Markup",
      description: "Implement FAQ schema, Local Business schema, and Service schema markup for better AI understanding",
      impact: "High", 
      aiToolsBenefited: ["All AI search engines"],
      status: "planned"
    },
    {
      title: "Trust Signal Enhancement",
      description: "Add NMLS licensing, testimonials, certifications, and detailed professional background",
      impact: "Medium",
      aiToolsBenefited: ["All platforms"],
      status: "planned"
    },
    {
      title: "Local Market Content", 
      description: "Add Wichita-specific market insights, loan programs, and area expertise content",
      impact: "Medium",
      aiToolsBenefited: ["Location-aware AI queries"],
      status: "planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-green-600";
      case "needs-improvement": return "text-orange-600"; 
      case "poor": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "needs-improvement": return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "poor": return <XCircle className="h-5 w-5 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-foreground hover:bg-muted"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
            <Bot className="h-8 w-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Readiness Analysis
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive evaluation of your website's visibility and optimization for AI search engines including ChatGPT, Perplexity, and Gemini.
          </p>
        </div>
      </section>

      {/* Overall Score */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Overall AI Readiness Score</CardTitle>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-5xl font-bold text-primary">{currentAnalysis.overallScore}</div>
                <div className="text-muted-foreground">/ 100</div>
              </div>
              <Progress value={currentAnalysis.overallScore} className="w-full max-w-md mx-auto mt-4" />
              <p className="text-muted-foreground mt-4">
                Your website has moderate AI visibility with significant opportunities for improvement
              </p>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Category Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Category Breakdown</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Detailed analysis of your website's performance in key areas that affect AI search visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentAnalysis.categories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(category.status)}
                      <span className="text-2xl font-bold">{category.score}</span>
                    </div>
                  </div>
                  <Progress value={category.score} className="w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Issues Found:</h4>
                      <ul className="space-y-1">
                        {category.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Recommended Improvements:</h4>
                      <ul className="space-y-1">
                        {category.improvements.map((improvement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Improvements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Planned Improvements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specific enhancements to increase your visibility across all major AI search engines
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {improvements.map((improvement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{improvement.title}</h3>
                      <p className="text-muted-foreground mb-4">{improvement.description}</p>
                    </div>
                    <Badge variant={improvement.impact === "High" ? "default" : "secondary"}>
                      {improvement.impact} Impact
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {improvement.aiToolsBenefited.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-accent">
                      {improvement.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            We've identified key improvements to enhance your AI search visibility. 
            Let's implement these changes to make your mortgage services more discoverable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => navigate('/services-faq')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Improved Content
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Search className="mr-2 h-4 w-4" />
              Schedule SEO Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIReadinessAnalysis;