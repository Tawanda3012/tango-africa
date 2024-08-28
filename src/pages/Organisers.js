import React from "react";
import Orgpages from "../components/Orgpages";
import Services from "../components/ServiceCard";
import Partners from "../components/Partners";
import FAQSection from "../components/FAQSection";
// import ContactPage from "../components/ContactPage";
// import ScannerSection from "../components/ScannerSection";
import Footer from "../components/Footer";
import ROIStats from "../components/ROIStats";

function Organisers() {
  return (
    <div className="mt-0 overflow-x-hidden lg:px-40 sm:mt-20 " >
      <Orgpages />
      <Services/>
      <Partners/>
      {/* <ScannerSection/> */}
      <ROIStats/>
      <FAQSection/>
      {/* <ContactPage/>
       */}
        <div id="footer">
          <Footer />
        </div>
    </div>
  );
}

export default Organisers;
