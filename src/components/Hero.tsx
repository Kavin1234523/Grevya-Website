
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-28 sm:pt-32 lg:pt-[120px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 shadow-lg animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Enterprise-Grade AI Solutions</span>
            <Zap className="h-4 w-4 text-primary-600 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight sm:leading-tight max-w-5xl mx-auto px-2">
            <span className="block">Transforming Businesses</span>
            <span className="block mt-2 sm:mt-3">
              <span className="gradient-text-primary">Through Intelligent</span>
            </span>
            <span className="block mt-2 sm:mt-3 gradient-text-primary">AI Automation</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Grevya delivers cutting-edge AI/ML platforms that drive unprecedented growth, efficiency, and competitive advantage for forward-thinking enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 mt-4">
            <Button 
              onClick={scrollToProducts}
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-primary-600 via-primary-600 to-primary-700 hover:from-primary-700 hover:via-primary-700 hover:to-primary-800 text-white text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-xl font-bold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Explore Solutions
                <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 px-4">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">AI & Automation Projects Delivered</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Average Client Satisfaction</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Priority Expert Support</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Years of AI Engineering Experience</div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 px-4">
            <div className="text-sm sm:text-base text-gray-500 font-semibold">Trusted by industry leaders in:</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {['Manufacturing', 'Finance', 'Enterprise', 'Startups'].map((industry, idx) => (
                <div key={idx} className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 font-medium text-sm hover:bg-white hover:shadow-md transition-all duration-300">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
