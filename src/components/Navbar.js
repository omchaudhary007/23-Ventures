"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const lastScrollY = useRef(0);
  const navLinksRef = useRef(null);
  const storyButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navAnimation = gsap.timeline();
    
    if (isScrolledDown) {
      navAnimation
        .to(navLinksRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "linear",
          display: 'none',
        })
        .to(storyButtonRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "linear",
          display: 'block',
          startAt: { x: -50 } 
        }, "-=0.25");
    } else {
      navAnimation
        .to(storyButtonRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "linear",
          display: 'none',
        })
        .to(navLinksRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "linear",
          display: 'flex',
          startAt: { x: -50 } 
        }, "-=0.25");
    }
  }, [isScrolledDown]);

  return (
    <header className="w-full p-4 flex items-center fixed top-0 z-50">
      <Logo width={4} height={4} />
      <nav className="m-auto px-4 py-1.5 flex items-center gap-4 bg-neutral-700 rounded-md">
        <Image
          className="cursor-pointer"
          width={25}
          height={25}
          src="/growthIcon.gif"
          alt="growthIcon"
        />
        <ul
          ref={navLinksRef}
          className="opacity-0 text-sm flex gap-8 text-white text-opacity-50"
        >
          <li>
            <Link
              className="hover:text-white hover:animate-bouncetext animate-delay-300"
              href="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white hover:animate-bouncetext animate-delay-300"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white hover:animate-bouncetext animate-delay-300"
              href="/about"
            >
              Blog
            </Link>
          </li>
        </ul>  
        <div className="ml-8 flex gap-2">
          <button
            ref={storyButtonRef}
            className="hidden opacity-0 relative overflow-hidden px-4 py-1.5 bg-gray-600 rounded-md group transition-all duration-300"
          >
            <span className="relative z-10">Stories</span>
            <div className="absolute inset-0 bg-violet-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0 w-full h-full"></div>
          </button>
          <button className="relative overflow-hidden px-4 py-1.5 bg-orangishRed rounded-md group">
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-violet-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 w-full h-full"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;