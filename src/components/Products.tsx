
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, File, Search, Calendar, Sparkles, ArrowRight, Check } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "KH Interview AI",
      description: "Revolutionary real-time AI interviewer for recruitment with intelligent candidate assessment, automated scoring, and bias-free evaluation processes.",
      icon: Users,
      features: ["Real-time AI Interviews", "Automated Scoring", "Bias-free Assessment", "Advanced Analytics"],
      color: "from-blue-500 via-cyan-500 to-blue-600",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "KH Med-Triage",
      description: "Advanced DICOM-based MRI Report Generator that analyzes medical images with precision and generates comprehensive, actionable diagnostic reports.",
      icon: File,
      features: ["DICOM Integration", "AI Report Generation", "Medical Image Analysis", "Clinical Workflow"],
      color: "from-green-500 via-emerald-500 to-green-600",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "KH Proposal AI",
      description: "Intelligent sales proposal generator that auto-creates professional, customized proposals using AI, dramatically saving time and improving win rates.",
      icon: Calendar,
      features: ["Auto-generation", "Template Library", "CRM Integration", "Smart Customization"],
      color: "from-purple-500 via-violet-500 to-purple-600",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "KH Transcript Analyzer",
      description: "Powerful conversation intelligence platform that summarizes, tags, and extracts actionable insights from conversations with advanced AI.",
      icon: Search,
      features: ["Smart Summarization", "Auto-tagging", "Action Item Extraction", "Sentiment Analysis"],
      color: "from-orange-500 via-amber-500 to-orange-600",
      gradient: "bg-gradient-to-br"
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            <span className="gradient-text-primary">Cutting-Edge</span> AI Products
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Enterprise-grade AI solutions designed to automate, optimize, and transform your business operations with intelligent technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${product.gradient} ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 p-6 sm:p-8 relative z-10">
                <div className={`w-20 h-20 ${product.gradient} ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <product.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className={`w-6 h-6 ${product.gradient} ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold transition-all duration-300 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
