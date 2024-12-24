"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testinomial from "@/components/Testinomial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <WhyUs />
      <Testinomial />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
