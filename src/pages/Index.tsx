
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Portfolio />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

