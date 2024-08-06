import React from "react";
import Orgpages from "../components/Orgpages";
import Services from "../components/ServiceCard";
import Partners from "../components/Partners";
import FAQSection from "../components/FAQSection";
// import ContactPage from "../components/ContactPage";
// import ScannerSection from "../components/ScannerSection";
import Footer from "../components/Footer";

function Organisers() {
  return (
    <div className="mt-20 overflow-x-hidden lg:px-40" >
      <Orgpages />
      <Services/>
      <Partners/>
      {/* <ScannerSection/> */}
      <FAQSection/>
      {/* <ContactPage/>
       */}
       <FAQSection/>
       <Footer/>
    </div>
  );
}

export default Organisers;
