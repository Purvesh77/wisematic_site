"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaBullhorn, FaSearch, FaMap, FaSync, FaRocket
} from "react-icons/fa";
import { useState } from "react";
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