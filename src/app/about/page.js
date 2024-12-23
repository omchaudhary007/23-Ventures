"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    // Reset any existing animations
    gsap.set(textRef.current.querySelectorAll("p, h1"), {
      opacity: 0,
      y: 50
    });
    const timer = setTimeout(() => {
      gsap.to(textRef.current.querySelectorAll("p, h1"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div ref={textRef}>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12 text-center">
              Where Vision Meets Reality
            </h1>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                At Twenty Three Ventures, we believe that every idea holds the potential to reshape the future. We're not just another startup incubator — we're the spark that ignites the fire of innovation. Our approach is rooted in a belief that success comes not just from knowledge, but from an ecosystem where collaboration, creativity, and technology converge.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We don't follow trends; we create them. From AI to Web3, our team doesn't just consult, we co-create, side by side with visionary entrepreneurs. Through cutting-edge strategies, tailored mentorship, and a global network of thought leaders, we empower you to take your startup to heights you never imagined.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-xl text-gray-300 leading-relaxed">
                But we're not here for the short-term. We're building the future. Our community is our foundation, and together, we're not just changing industries, we're shaping the world. With Twenty Three Ventures, you're not just starting a business — you're building a legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
