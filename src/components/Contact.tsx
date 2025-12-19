
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Phone, Clock, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-primary-200 shadow-lg">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 px-2">
            Let's Build the <span className="gradient-text-primary">Future</span> Together
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed font-medium">
            Ready to transform your business with AI? Get in touch with our experts for a free consultation and discover how we can accelerate your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </div>
              <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base font-semibold mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base font-semibold mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm sm:text-base font-semibold mb-2 block">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm sm:text-base font-semibold mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="text-base border-2 focus:border-primary-600 focus:ring-primary-600 resize-none"
                    placeholder="Tell us about your project, requirements, or how we can help transform your business..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Consultation Booking & Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <CardHeader className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">
                    Book a Free Consultation
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                <p className="text-primary-100 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Schedule a 30-minute call with our AI experts to discuss your specific needs, explore solutions, and discover how we can help transform your business operations.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-primary-600 hover:bg-gray-50 text-lg py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6"
                >
                  Schedule Now
                </Button>
                <div className="space-y-3 text-sm sm:text-base text-primary-100">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="font-semibold">Free 30-minute consultation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="font-semibold">No obligation or commitment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="font-semibold">Custom solution roadmap</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  Get in Touch
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Mail className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Email</strong>
                      <a href="mailto:info@grevya.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                        info@grevya.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Phone className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Phone</strong>
                      <a href="tel:+9195669 66064" className="text-primary-600 hover:text-primary-700 font-semibold">
                        +91 9566966064
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Clock className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Response Time</strong>
                      <span className="text-gray-700 font-semibold">Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

