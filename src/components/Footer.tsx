import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";
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
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text-primary mb-4 sm:mb-6">Grevya</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Building intelligent, scalable AI solutions for the future of business. Empowering enterprises with cutting-edge technology.
            </p>
            <div className="mb-4">
              <a 
                href="mailto:kavin@grevya.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>kavin@grevya.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Solutions</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <Link to="#industries" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Healthcare AI
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  HR & Recruitment
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  SaaS Automation
                </Link>
              </li>
              <li>
                <Link to="#industries" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Enterprise AI
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <Link to="/about" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="#contact" className="hover:text-white transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Get the latest insights on AI innovation and industry trends.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600"
              />
              <Button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2025 Grevya. All rights reserved. | Empowering businesses with AI-driven innovation.
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
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
