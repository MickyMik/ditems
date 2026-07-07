import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Work />
      <Contact />
      <Footer />
      <FloatingDownload />
    </div>
  );
};

export default Index;
