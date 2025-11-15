
import { Sparkles, Target, Eye, TrendingUp, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 border border-primary-200">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            About <span className="gradient-text-primary">Grevya</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Leading the future of business transformation through intelligent AI and SaaS solutions that drive measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="animate-slide-in order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700">
                <Target className="h-6 w-6 text-white" />
              </div>
              Our Story
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg font-medium">
              Grevya was founded with a vision to bridge the gap between complex AI technologies and practical business solutions. We specialize in creating intelligent, scalable platforms that transform how businesses operate, compete, and thrive in the digital age.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg font-medium">
              Our team brings together world-class expertise in artificial intelligence, machine learning, cloud computing, and enterprise software development. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive measurable results. From innovative startups to Fortune 500 companies, we've helped organizations harness the power of AI to streamline operations, enhance customer experiences, and unlock new revenue opportunities.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg font-medium">
              At Grevya, we believe in building long-term partnerships with our clients. Our commitment to excellence, innovation, and customer success has made us a trusted partner for businesses looking to stay ahead in the rapidly evolving digital landscape.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="border-l-4 border-primary-600 pl-4 sm:pl-6 py-4 bg-gradient-to-r from-primary-50 to-transparent rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-5 w-5 text-primary-600" />
                  <h4 className="text-lg sm:text-xl font-bold text-primary-600">Mission</h4>
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">To simplify complex problems using AI & SaaS technologies</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <h4 className="text-lg sm:text-xl font-bold text-purple-600">Vision</h4>
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">To be a trusted AI transformation partner for businesses across the globe</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-10 shadow-2xl border border-primary-100">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text-primary mb-2">50+</div>
                  <div className="text-gray-700 text-sm sm:text-base font-semibold">Projects Delivered</div>
                  <Award className="h-6 w-6 text-primary-600 mx-auto mt-3" />
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text-primary mb-2">100%</div>
                  <div className="text-gray-700 text-sm sm:text-base font-semibold">Client Satisfaction</div>
                  <TrendingUp className="h-6 w-6 text-primary-600 mx-auto mt-3" />
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text-primary mb-2">24/7</div>
                  <div className="text-gray-700 text-sm sm:text-base font-semibold">Support Available</div>
                  <Clock className="h-6 w-6 text-primary-600 mx-auto mt-3" />
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text-primary mb-2">5+</div>
                  <div className="text-gray-700 text-sm sm:text-base font-semibold">Years Experience</div>
                  <Users className="h-6 w-6 text-primary-600 mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
