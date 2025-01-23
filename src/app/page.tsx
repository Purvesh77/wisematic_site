
import Header from "./_components/landing-header";
import HeroSection from "./_components/landing-hero";
import AboutUs from "./_components/about-us";
import Services from "./_components/services";
import Why from "./_components/why";
import ContactUs from "./_components/contact_us";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Why/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
