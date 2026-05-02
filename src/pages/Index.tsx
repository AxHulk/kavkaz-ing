import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Expertise } from "@/components/site/Expertise";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
