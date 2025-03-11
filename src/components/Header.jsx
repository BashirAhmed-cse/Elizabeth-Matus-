"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.jpeg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinUsClick = () => {
    if (pathname === "/") {
      document
        .getElementById("join-us")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#join-us");
    }
  };

  const handleAboutClick = () => {
    if (pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#about");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolling ? "bg-[#021730] shadow-md z-999" : ""}`}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo (Clickable - Redirects to Home) */}
        <Link href="/">
          <Image
            src={logo}
            alt="Ernest Banda Logo"
            width={95}
            height={95}
            className="w-16 h-16 md:w-34 md:h-34 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation (Visible on larger screens) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-white hover:bg-white rounded-md p-2 hover:text-gray-900 text-2xl font-semibold uppercase"
          >
            Home
          </Link>
          <button
            onClick={handleAboutClick}
            href="/about"
            className="text-white hover:bg-white rounded-md p-2 hover:text-gray-900 text-2xl font-semibold uppercase"
          >
            About
          </button>
          <Link
            href="/issues"
            className="text-white hover:bg-white rounded-md p-2 hover:text-gray-900 text-2xl font-semibold uppercase"
          >
            Issues
          </Link>
          <button
            onClick={handleJoinUsClick}
            className="text-white hover:bg-white rounded-md p-2 hover:text-gray-900 text-2xl font-semibold uppercase cursor-pointer"
          >
            Join Us
          </button>
          <button
            onClick={handleJoinUsClick}
            className="text-white hover:bg-white rounded-md p-2 hover:text-gray-900 text-2xl font-semibold uppercase cursor-pointer"
          >
            Contact
          </button>

          <Link
            href="/"
            className="bg-white text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-300 text-2xl font-semibold uppercase"
          >
            Donate
          </Link>
        </nav>

        {/* Donate Button (Always Visible on Mobile) */}
        <Link
          href="/"
          className="bg-white text-gray-900  hover:bg-gray-400 px-4 py-2 rounded-lg  md:hidden uppercase"
        >
          Donate
        </Link>

        {/* Mobile Menu Button (☰) */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Shows When Open) */}
   {/* Mobile Menu (Shows When Open) */}
{menuOpen && (
  <nav className="absolute top-full left-0 w-full bg-[#EAEBE6] shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
    <Link 
      href="/" 
      className="text-black hover:text-red-600 uppercase"
      onClick={() => setMenuOpen(false)} // Close menu
    >
      Home
    </Link>
    <button 
      onClick={() => {
        handleAboutClick();
        setMenuOpen(false); // Close menu
      }}
      className="text-black hover:text-red-600 uppercase cursor-pointer"
      
    >
      About
    </button>
    <Link 
      href="/issues" 
      className="text-black hover:text-red-600 uppercase"
      onClick={() => setMenuOpen(false)} // Close menu
    >
      Issues
    </Link>
    <button
      onClick={() => {
        handleJoinUsClick();
        setMenuOpen(false); // Close menu
      }}
      className="text-black hover:text-red-600 uppercase cursor-pointer"
    >
      Join Us
    </button>
    <button
      onClick={() => {
        handleJoinUsClick();
        setMenuOpen(false); // Close menu
      }}
      className="text-black hover:text-red-600 uppercase cursor-pointer"
    >
      Contact
    </button>
  </nav>
)}

    </header>
  );
};

export default Header;
