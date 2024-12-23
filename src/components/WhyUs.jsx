"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaLightbulb,
  FaUserTie,
  FaChartLine,
  FaNetworkWired,
  FaCheckCircle,
} from "react-icons/fa";

const WhyUs = () => {
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Pioneering Innovation",
      description:
        "Redefining startups with AI and Web3 expertise, shaping the future of technology.",
      icon: <FaLightbulb className="text-4xl text-yellow-400 mb-4" />,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      id: 2,
      title: "Tailored Mentorship",
      description:
        "Personalized guidance to navigate challenges and seize opportunities.",
      icon: <FaUserTie className="text-4xl text-blue-400 mb-4" />,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Accelerated Growth",
      description:
        "Strategic programs that drive measurable results and market success.",
      icon: <FaChartLine className="text-4xl text-green-400 mb-4" />,
      gradient: "from-cyan-600 to-green-600",
    },
    {
      id: 4,
      title: "Collaborative Ecosystem",
      description:
        "Thriving network of entrepreneurs, investors, and thought leaders.",
      icon: <FaNetworkWired className="text-4xl text-red-400 mb-4" />,
      gradient: "from-green-600 to-yellow-600",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardElements = cardsRef.current.children;

    gsap.fromTo(
      cardElements,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="whyUs-section" className="w-full px-6 py-20  flex flex-col md:flex-row items-center justify-between gap-24 bg-gray-900 overflow-hidden">
      <div ref={cardsRef} className="w-full md:w-1/2 flex flex-col gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-gradient-to-r ${card.gradient} p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 transform`}
          >
            <div className="flex flex-col items-start">
              {card.icon}
              <h3 className="text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-100 text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <p className="text-xl mb-8 text-gray-300 leading-relaxed">
          At Twenty Three Ventures, we blend innovation, strategy, and community
          to launch startups into success stories. From AI integration to Web3
          breakthroughs, we turn challenges into opportunities.
        </p>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Our Mission
            </h4>
            <p className="text-gray-300 text-lg">
              To inspire and empower startups with cutting-edge tools,
              expertise, and connections for impactful growth.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-2xl font-semibold mb-3 text-purple-400">
              Our Track Record
            </h4>
            <p className="text-gray-300 text-lg">
              <FaCheckCircle className="inline-block text-green-500 mr-2" />
              Partnered with 50+ startups <br />
              <FaCheckCircle className="inline-block text-green-500 mr-2" />
              $15M+ funding raised collectively <br />
              <FaCheckCircle className="inline-block text-green-500 mr-2" />
              85% of startups achieving long-term growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
