import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Main = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <main className="w-full mt-28 p-3 flex items-start justify-between">
      <div className="mt-28 opacity-0" ref={containerRef}>
        <h3 className="mb-3 font-cursive text-xl text-green-500">
        Empowering Startups to Scale Faster
        </h3>
        <h3 className="text-5xl font-semibold">
          Transform Your Startup Vision into{" "}
          <span className="text-blue-400">Reality</span>
        </h3>
        <button className="btn w-fit my-4 mr-4 px-4 py-1.5 border-2 border-white rounded-tr-md rounded-bl-md group">
          <span className="relative z-10">Stories</span>
          <div className="btn-overlay bg-violet-500"></div>
        </button>
        <button className="btn w-fit px-4 py-1.5 bg-blue-500 border-2 rounded-tr-md rounded-bl-md group">
          <span className="relative z-10">Contact</span>
          <div className="btn-overlay bg-violet-500"></div>
        </button>
      </div>
      <video className="relative top-0 left-0 w-1/2 h-full" autoPlay loop muted>
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
    </main>
  );
};

export default Main;
