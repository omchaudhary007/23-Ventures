"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const Main = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xcc09d,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".text-center",
      {
        y: 100, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "center center",
        end: "top 100px",
        scrub: 1,
      },
    });

    tl.to(videoRef.current, {
      width: "80%",
      padding: "0",
      duration: 1.5,
      ease: "power2.inOut",
    }).to(videoRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <main ref={vantaRef} id="main-section" className="w-full py-10 flex flex-col items-center gap-8">
      <div className="p-4 opacity-0 text-center text-heading" ref={containerRef}>
        <h3 className="w-fit mx-auto mb-6 py-1.5 px-4 rounded-full font-cursive bg-gray-800">
          Empowering Startups to Scale Faster
        </h3>
        <h1 className="text-center m-auto text-7xl font-light font-fredoka">
          Transform{" "}
          <span className="text-5xl p-1.5 pb-0 bg-white rounded-xl text-red-500 whitespace-nowrap">
            Your Startup
          </span>{" "}
          Vision into Reality
        </h1>
        <button 
          onClick={() => scrollToSection('testimonial-section')}
          className="btn w-fit mt-10 mr-4 px-4 py-1.5 border-2 border-white rounded-tr-md rounded-bl-md group"
        >
          <span className="relative z-10">Stories</span>
          <div className="btn-overlay bg-violet-500"></div>
        </button>
        <button 
          onClick={() => scrollToSection('contact-section')}
          className="btn w-fit px-4 py-1.5 bg-lime-500 border-2 rounded-tr-md rounded-bl-md group"
        >
          <span className="relative z-10">Contact</span>
          <div className="btn-overlay bg-violet-500"></div>
        </button>
      </div>
      <video
        ref={videoRef}
        className="relative top-0 left-0 w-1/2 p-2 bg-black border-2 border-gray-500 rounded-lg m-auto"
        autoPlay
        loop
        muted
      >
        <source src="/tmp.mp4" type="video/mp4" />
      </video>
    </main>
  );
};

export default Main;
