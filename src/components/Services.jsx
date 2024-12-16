"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const borderColor = ["border-blue-500", "border-yellow-500", "border-green-500", "border-red-500"];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
  {
    title: "Startup Incubation",
    description: "End-to-end incubation for AI and Web3 startups, turning ideas into scalable businesses.",
    icon: "🚀",
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance on AI and Web3 integration to accelerate growth and efficiency.",
    icon: "🧠",
  },
  {
    title: "Community Building",
    description: "Fostering a collaborative ecosystem to help startups grow through shared knowledge and networks.",
    icon: "🌐",
  },
  {
    title: "Future-Focused Integration",
    description: "Innovative solutions to integrate AI and Web3 technologies seamlessly into your business model.",
    icon: "🔗",
  },
];


  useEffect(() => {
    if (window) {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.fromTo(
      ".services-heading",
      {
        y: -100,
        opacity: 0,
        rotationX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top center+=100",
        },
      }
    );
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.1,
          zIndex: 10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        // Reset all cards
        cardsRef.current.forEach((c) => {
          gsap.to(c, {
            scale: 1,
            zIndex: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full my-20 p-4">
      <h2 className="services-heading text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`w-[19rem] h-80 p-4 bg-blackGradient rounded-xl border-2 ${borderColor[index]} cursor-pointer transition-transform`}
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
