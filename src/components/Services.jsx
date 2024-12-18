import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaRobot,
  FaHandshake,
} from "react-icons/fa";
import PointCard from "@/subcomponents/PointCard";

const color = [
  "blue",
  "yellow",
  "green",
  "red",
  "orange",
  "purple",
  "pink",
  "aqua",
];

const points = [
  {
    title: "Empowering ideas with innovation",
    description:
      "Craft your unique AI and Web3 journey with tailored strategies and expert mentorship.",
    icon: <FaLightbulb size={24} color={color[1]} />,
  },
  {
    title: "Seamless from concept to success",
    description:
      "Transform your vision into scalable ventures with precision planning and execution.",
    icon: <FaRocket size={24} color={color[2]} />,
  },
  {
    title: "Community-driven growth",
    description:
      "Leverage our thriving network of founders, investors, and thought leaders for exponential opportunities.",
    icon: <FaUsers size={24} color={color[3]} />,
  },
  {
    title: "Be future-proof",
    description:
      "Seamlessly integrate AI and Web3 technologies to stay adaptive in a rapidly evolving world.",
    icon: <FaRobot size={24} color={color[4]} />,
  },
  {
    title: "Collaborate to lead the future",
    description:
      "Join a collaborative ecosystem where startups thrive, innovate, and succeed together.",
    icon: <FaHandshake size={24} color={color[5]} />,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const pointsContainerRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);

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
  }, []);

  useEffect(() => {
    if (hoveredCard === 0) {
      const interval = setInterval(() => {
        setCurrentPointIndex((prev) => (prev + 1) % points.length);
        if (pointsContainerRef.current) {
          gsap.to(pointsContainerRef.current, {
            y: -currentPointIndex * 240,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }, 2000);
      setIntervalId(interval);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [hoveredCard, currentPointIndex]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    setMousePosition({ x, y });

    // Update transform based on cursor position for 3D effect
    if (card) {
      const rotateY = (x / cardWidth - 0.5) * 20;

      if (x < cardWidth / 3) {
        card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(-20px)`;
        card.style.borderLeftWidth = "2px";
        card.style.borderLeftColor = color[index];
      } else if (x > (cardWidth * 2) / 3) {
        card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(-20px)`;
        card.style.borderRightWidth = "2px";
        card.style.borderRightColor = color[index];
      } else {
        card.style.transform = `perspective(1000px) rotateY(${rotateY}deg)`;
      }

      // Add top and bottom borders based on Y position
      if (y < cardHeight / 3) {
        card.style.borderTopWidth = "2px";
        card.style.borderTopColor = color[index];
      } else if (y > (cardHeight * 2) / 3) {
        card.style.borderBottomWidth = "2px";
        card.style.borderBottomColor = color[index];
      }

      card.style.transition =
        "transform 0.1s ease-out, border-width 0.2s ease-out";
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
    // Reset transform and border styles
    const card = cardsRef.current[hoveredCard];
    if (card) {
      card.style.transform = "perspective(1000px) rotateY(0deg)";
      card.style.borderWidth = "";
      card.style.borderColor = "";
    }
  };

  return (
    <section ref={sectionRef} className="w-full my-20 p-4">
      <h2 className="services-heading text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="flex flex-col gap-20 justify-center items-center">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`card w-4/5 p-6 rounded-xl cursor-pointer transition-all overflow-hidden flex items-center justify-center gap-8`}
          onMouseMove={(e) => handleMouseMove(e, 0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={pointsContainerRef}
            className="h-[30rem] transition-transform duration-500"
          >
            {points.map((point, index) => (
              <PointCard
                key={index}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Why We're Your
            </h3>
            <h3 className="text-4xl font-semibold mb-4">
              Gateway to Startup Success
            </h3>
            <p className="font-sans opacity-70">
              Choose Twenty Three Ventures to redefine your entrepreneurial
              journey with innovation, strategy, and growth at every step.
            </p>
            <a href="https://www.linkedin.com/company/mna-studios" target="_blank" className="inline-block mt-6 px-4 py-2 rounded-full font-semibold bg-orange-600 hover:bg-orange-700">
              Let's Connect
            </a>
          </div>
          <div
            className="color-effect"
            style={{
              boxShadow: `-5px 10px 80px 80px ${color[0]}`,
              left: `${hoveredCard === 0 ? mousePosition.x : 0}px`,
              top: `${hoveredCard === 0 ? mousePosition.y : 0}px`,
              transition: "left 0s, top 0.3s",
              opacity: hoveredCard === 0 ? 1 : 0,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
