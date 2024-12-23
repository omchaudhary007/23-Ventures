"use client"

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testinomial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "AI Startup Founder",
      quote:
        "Twenty Three Ventures helped us refine our business model and seamlessly integrate AI solutions, setting us up for rapid scaling.",
      image: "/testi01.jpg",
    },
    {
      id: 2,
      name: "Riyaj Khan",
      role: "Web3 Entrepreneur",
      quote:
        "Their mentorship and community support were game-changers, connecting us to investors and unlocking new opportunities.",
      image: "/testi02.jpg",
    },
    {
      id: 3,
      name: "Suzen Brown",
      role: "Tech Innovator",
      quote:
        "The insights and resources we gained from their ecosystem were instrumental in driving our startup's innovation and growth.",
      image: "/testi03.jpg",
    },
    {
      id: 4,
      name: "Aeisha Raza",
      role: "Community Builder",
      quote:
        "Their focus on fostering a collaborative community gave our startup the connections and support needed to thrive in a competitive market.",
      image: "/testi04.jpg",
    },
    {
        "id": 5,
        "name": "Liam Anderson",
        "role": "Blockchain Visionary",
        "quote": "With Twenty Three Ventures, we turned complex Web3 ideas into actionable strategies, propelling our startup to new heights.",
      image: "/testi05.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipping(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonial-section" className="py-36 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div
          className={`relative transform-style-3d ${
            isFlipping ? "animate-flip" : ""
          }`}
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-500 hover:scale-105">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-24 h-24">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
                  }}
                />
                <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-2">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-purple-500 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsFlipping(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsFlipping(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-purple-500" : "bg-gray-300"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          
          @keyframes animate-flip {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          
          .animate-flip {
            animation: animate-flip 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Testinomial;
