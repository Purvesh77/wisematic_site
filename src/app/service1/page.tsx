"use client";
import Header from "../_components/landing-header";
import Footer from "../_components/footer";
import Hero from "./hero";
import Enquire from "./enquire";
import Cards from "./cards";

const TechConsultationPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <Header />
      <Hero />
      <Cards />
      <Enquire />
      <Footer />
    </div>
  );
};

export default TechConsultationPage;