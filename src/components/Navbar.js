"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const lastScrollY = useRef(0);
  const navLinksRef = useRef(null);
  const storyButtonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

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
          display: "none",
        })
        .to(
          storyButtonRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "linear",
            display: "block",
            startAt: { x: -50 },
          },
          "-=0.25"
        );
    } else {
      navAnimation
        .to(storyButtonRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "linear",
          display: "none",
        })
        .to(
          navLinksRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "linear",
            display: "flex",
            startAt: { x: -50 },
          },
          "-=0.25"
        );
    }
  }, [isScrolledDown]);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === "/about") {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(`${href.slice(1)}-section`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      const element = document.getElementById(`${href.slice(1)}-section`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <header className="w-full py-10">
      <nav className="fixed z-50 top-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 flex items-center gap-4 bg-neutral-700 rounded-md">
      <Logo width={2} height={2} />
        <ul
          ref={navLinksRef}
          className="opacity-0 text-sm flex gap-8 text-white text-opacity-70"
        >
          <li>
            <Link
              className="hover:text-white"
              href="#service"
              onClick={(e) => handleNavClick(e, "#service")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white"
              href="/about"
              onClick={(e) => handleNavClick(e, "/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white"
              href="#whyUs"
              onClick={(e) => handleNavClick(e, "#whyUs")}
            >
              Discover
            </Link>
          </li>
        </ul>
        <div className="ml-8 flex gap-2">
          <button
            ref={storyButtonRef}
            onClick={(e) => handleNavClick(e, "#testimonial")}
            className="btn hidden opacity-0 px-4 py-1.5 bg-gray-600 rounded-md group transition-all duration-300"
          >
            <span className="relative z-10">Stories</span>
            <div className="absolute inset-0 bg-violet-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0 w-full h-full"></div>
          </button>
          <button 
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn px-4 py-1.5 bg-lime-400 rounded-md group"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-violet-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 w-full h-full"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
