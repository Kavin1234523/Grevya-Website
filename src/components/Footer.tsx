import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github, ArrowUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text-primary mb-2 sm:mb-3">Grevya</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base font-medium">
              Grevya Technologies Pvt Ltd
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              We build scalable AI systems that drive real business outcomes.
            </p>
            <div className="mb-4">
              <div className="flex items-start gap-2 text-gray-300 text-sm sm:text-base mb-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  4th South Cross St., Kovai Thiru Nagar,<br />
                  Kalapatty (E), Coimbatore 641014
                </span>
              </div>
              <a 
                href="mailto:kavin@grevya.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>kavin@grevya.com</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a href="#" className="p-3 rounded-lg bg-gray-800 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-gray-800 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-gray-800 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Solutions</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gen AI Integration
                </Link>
              </li>
              <li>
                <Link to="#services" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  RAG Application
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Social Media Automation
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Virtual Assistance
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <Link to="/about" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="#contact" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              AI playbooks, case studies & engineering insights. <span className="text-gray-400">No spam.</span>
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600 transition-all"
              />
              <Button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get AI Insights
              </Button>
            </div>
          </div>
        </div>
        
        {/* Trust Signals */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Trusted by startups & enterprises</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Built in India • Serving Globally</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Enterprise-grade AI & Security</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} Grevya Technologies Pvt Ltd. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs sm:text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
