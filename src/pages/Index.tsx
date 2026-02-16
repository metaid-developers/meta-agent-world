import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import WhatCanDoSection from "@/components/WhatCanDoSection";
import HowToStartSection from "@/components/HowToStartSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <WhatCanDoSection />
          <HowToStartSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
