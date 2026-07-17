import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutPreview from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </MainLayout>
  );
}

export default Home;