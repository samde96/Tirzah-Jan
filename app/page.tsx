import ContentSection from "@/components/content-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import FooterSlider from "@/components/footerSlider";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <div className="px-6 md:px-16 lg:px-32">
        <FooterSlider />
      </div>
      <ContentSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
