"use client";
import Header from "../_components/landing-header";
import Footer from "../_components/footer";
import Hero from "./hero";
import Enquire from "../service1/enquire";
import Cards from "./cards";

const AppDev = () => {
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

export default AppDev;