"use client";
import Footer from "../_components/footer";

import Header from "../_components/landing-header";
import Hero from "./hero";
import About from "./about";
import Values from "./values";
import Services from "./services";
import Work from "./work";

const AboutUsPage = () => {

  return(
    <div>
    <Header/>
    <Hero/>
    <About/>
    <Values/>
    <Services/>
    <Work/>
    <Footer/>
    </div>
  )
}
export default AboutUsPage;