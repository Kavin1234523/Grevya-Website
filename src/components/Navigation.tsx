
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full glass border-b border-gray-200/50 z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-primary transition-all duration-300 group-hover:scale-105">
                Grevya
              </h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              <Link to="/" className="relative text-gray-700 hover:text-primary-600 px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary-50 group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-primary-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/about" className="relative text-gray-700 hover:text-primary-600 px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary-50 group">
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-primary-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <button onClick={() => scrollToSection('industries')} className="relative text-gray-700 hover:text-primary-600 px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary-50 group">
                <span className="relative z-10">Solutions</span>
                <span className="absolute inset-0 bg-primary-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="relative text-gray-700 hover:text-primary-600 px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary-50 group">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-primary-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-sm px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                About
              </Link>
              <button 
                onClick={() => {
                  scrollToSection('industries');
                  setIsMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                Solutions
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }} 
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                Contact
              </button>
              <Button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }} 
                className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-base py-3 font-bold shadow-lg"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
