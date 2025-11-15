
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Search, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Pretrained AI Models",
      description: "Leverage our extensive library of production-ready pretrained models to accelerate your AI implementation and reduce time-to-market.",
      icon: Search,
      highlight: "Ready-to-deploy solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Rapid MVPs & POCs",
      description: "Transform concepts into working prototypes in weeks, not months, with our agile development methodology and rapid iteration cycles.",
      icon: Clock,
      highlight: "Fast time-to-market",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalable SaaS Architecture",
      description: "Built on cloud-native technologies and microservices architecture that seamlessly scale with your business demands and user growth.",
      icon: Check,
      highlight: "Future-proof infrastructure",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Human-Centric Design",
      description: "Our solutions prioritize user experience, ensuring intuitive interfaces, accessibility, and seamless integration into existing workflows.",
      icon: Users,
      highlight: "User-first approach",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-primary-200 shadow-lg">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            Why Choose <span className="gradient-text-primary">Grevya</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Experience the advantage of working with AI experts who understand both cutting-edge technology and real-world business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4 p-6 sm:p-8 relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </CardTitle>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 border border-primary-200">
                  <span className="text-xs sm:text-sm text-primary-700 font-bold">{benefit.highlight}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-100 mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have revolutionized their operations with our cutting-edge AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
                <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="font-semibold text-white">Free Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="font-semibold text-white">Custom Solutions</span>
                </div>
                <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Check className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="font-semibold text-white">24/7 Expert Support</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
