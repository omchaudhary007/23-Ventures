"use client";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import React from "react";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";


const page = () => {
  return (
    <div className="w-full h-[200vh]">
      <Navbar />
      <Main />
      <Services />
    </div>
  );
};

export default page;
