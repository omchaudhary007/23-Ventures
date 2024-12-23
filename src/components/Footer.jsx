"use client"

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

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
    <footer className="bg-gray-900 w-full h-20 flex items-center justify-around text-heading">
      <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
        <Logo width={3} height={3} />
      </Link>
      <p>&copy; 23 Venstures Inc. 2025</p>
      <div className="flex items-center gap-6 font-fredoka">
        <Link className="hover:underline" href="#main" onClick={(e) => handleNavClick(e, "#main")}>
          Home
        </Link>
        <Link className="hover:underline" href="#service" onClick={(e) => handleNavClick(e, "#service")}>
          Services
        </Link>
        <Link className="hover:underline" href="#about" onClick={(e) => handleNavClick(e, "/about")}>
          About
        </Link>
        <Link className="hover:underline" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/company/23-ventures-inc/" target="_blank">
          <FaLinkedin className="w-8 h-8" size={50} />
        </a>
        <a href="https://www.instagram.com/23venturesinc/" target="_blank">
          <FaInstagram className="w-8 h-8" size={50} />
        </a>
        <a href="https://www.facebook.com/23venturesinc" target="_blank">
          <FaFacebook className="w-8 h-8" size={50} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
