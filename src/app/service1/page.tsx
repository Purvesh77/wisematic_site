
"use client";
import Header from "../_components/landing-header";
import { FaCheck, FaCogs, FaTasks, FaChartLine, FaRobot, FaMap, FaRoute  } from 'react-icons/fa';
import Footer from "../_components/footer";
import Hero from "./hero";
import Enquire from "./enquire";
import Cards from "./cards";

const TechConsultationPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Hero />

      <div>
       
        
      </div>
      <Cards/>
      <Enquire/>
<Footer/> 
    </div>
  );
};

export default TechConsultationPage;
