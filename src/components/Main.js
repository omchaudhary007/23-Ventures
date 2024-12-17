import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      containerRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
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

  return (
    <main className="relative lightEffect w-full my-36 flex flex-col items-center gap-8">
      <div className="p-4 opacity-0 text-center" ref={containerRef}>
        <h3 className="w-fit mx-auto mb-10 py-1.5 px-4 rounded-full font-cursive text-green-500 bg-gray-800">
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
      <div
        className="videoBox relative z-20 w-1/2  p-2 bg-black border-2 border-gray-500 rounded-lg"
        ref={videoRef}
      >
        <video className="relative top-0 left-0" autoPlay loop muted>
          <source src="/tmp.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
};

export default Main;
