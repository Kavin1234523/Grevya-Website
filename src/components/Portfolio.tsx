import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Users, Heart, TrendingUp, ShoppingCart, FileText, ArrowRight, Sparkles } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Healthcare Platform",
      description: "Revolutionary patient management system leveraging advanced ML algorithms for predictive diagnostics, treatment optimization, and real-time health monitoring.",
      icon: Heart,
      technologies: ["Machine Learning", "Python", "TensorFlow", "React", "AWS"],
      impact: "Reduced diagnosis time by 45%",
      color: "from-red-500 via-pink-500 to-rose-500",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "HR Recruitment Automation",
      description: "Intelligent recruitment ecosystem with AI-driven candidate screening, automated interview processes, and predictive talent analytics.",
      icon: Users,
      technologies: ["NLP", "AI/ML", "Node.js", "MongoDB", "Docker"],
      impact: "Improved hiring efficiency by 60%",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "Enterprise SaaS Analytics",
      description: "Comprehensive business intelligence platform with real-time analytics, predictive modeling, and actionable insights for data-driven decision making.",
      icon: TrendingUp,
      technologies: ["Data Science", "Python", "React", "AWS", "Kubernetes"],
      impact: "Increased data-driven decisions by 70%",
      color: "from-green-500 via-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "E-Commerce AI Assistant",
      description: "Next-generation intelligent commerce platform featuring AI chatbots, personalized recommendations, and automated customer service solutions.",
      icon: ShoppingCart,
      technologies: ["ChatGPT API", "React", "Node.js", "Redis", "Microservices"],
      impact: "Boosted conversion rate by 35%",
      color: "from-purple-500 via-violet-500 to-indigo-500",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "Document Processing System",
      description: "Enterprise-grade document intelligence platform using computer vision and OCR for automated classification, extraction, and data processing.",
      icon: FileText,
      technologies: ["Computer Vision", "OCR", "Python", "FastAPI", "PostgreSQL"],
      impact: "Reduced processing time by 80%",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "Advanced AI-powered workflow engine that automates complex business processes, decision-making, and operational excellence.",
      icon: Brain,
      technologies: ["AI/ML", "Automation", "TypeScript", "PostgreSQL", "GraphQL"],
      impact: "Saved 1000+ hours per month",
      color: "from-indigo-500 via-blue-500 to-purple-500",
      gradient: "bg-gradient-to-br"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Our Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            <span className="gradient-text-primary">Transformative</span> Projects
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Discover how we've empowered enterprises with cutting-edge AI solutions that drive measurable business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 ${project.gradient} ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl ${project.gradient} ${project.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 text-base leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 mb-6 border border-primary-100">
                    <p className="text-primary-700 font-bold text-sm flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      {project.impact}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-primary-100 mb-8 text-lg">
              Let's discuss how we can create an extraordinary solution for your business
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
