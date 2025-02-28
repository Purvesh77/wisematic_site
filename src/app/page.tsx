import Header from "./_components/landing-header";
import HeroSection from "./_components/landing-hero";
import AboutUs from "./_components/about-us";
import Services from "./_components/services";
import SolutionsSection from "./_components/Powerful_Section";
import TechnicalSupportSection from "./_components/TechnicalSupportSection";
import BlogSection from "./_components/blog-section";
import TestimonialsSection from "./_components/testimonial-section"; // Import the new section
import Why from "./_components/why";
import ContactUs from "./_components/contact_us";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <SolutionsSection />
      <TechnicalSupportSection />
      <BlogSection />
      <TestimonialsSection /> {/* Add the new section here */}
      <Why />
      <ContactUs />
      <Footer />
    </div>
  );
}