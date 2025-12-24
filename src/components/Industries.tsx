
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Search, File, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      title: "Manufacturing & Supply Chain",
      description: "Intelligent manufacturing solutions with AI-driven production optimization, predictive maintenance, and advanced supply chain analytics transforming operations.",
      icon: File,
      solutions: ["Production Optimization", "Predictive Maintenance", "Supply Chain Analytics", "Quality Control AI"],
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      title: "HR & Recruitment",
      description: "Intelligent hiring solutions with AI-driven candidate assessment, automated interview processes, and talent optimization platforms.",
      icon: Users,
      solutions: ["AI Interviewing", "Candidate Scoring", "Recruitment Analytics", "Talent Matching"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "SaaS Automation for SMEs",
      description: "Scalable automation solutions designed specifically for small and medium enterprises to compete with enterprise-level efficiency.",
      icon: Search,
      solutions: ["Process Automation", "Data Analytics", "Customer Insights", "Workflow Optimization"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Custom AI for Enterprise",
      description: "Tailored AI solutions for large enterprises with complex requirements, seamless integrations, and enterprise-grade security.",
      icon: Calendar,
      solutions: ["Custom ML Models", "Enterprise Integration", "Scalable Infrastructure", "AI Strategy Consulting"],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Industry Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            Industries We <span className="gradient-text-primary">Transform</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Delivering specialized AI solutions across diverse industries with deep domain expertise and proven transformational results
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="p-6 sm:p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg font-medium">
                  {industry.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Key Solutions:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div 
                        key={solutionIndex} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-primary-200 group-hover:bg-white transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient} flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base text-gray-700 font-medium">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-300"
                >
                  Explore Solutions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
