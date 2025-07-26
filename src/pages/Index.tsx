import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
