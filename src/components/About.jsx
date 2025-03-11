"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  return (
    <div id="about" className="w-full max-w-6xl mx-auto px-4  py-12 rounded-lg scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
        {/* Left Side Content (60%) */}
        <motion.div
          className="md:col-span-3 flex flex-col justify-center"
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1 }} // Animation duration
        >
          <h1 className="text-2xl underline">ABOUT ME</h1>
          <h1 className="text-4xl font-bold my-4 uppercase">
            <span className="text-[#882538]">Elizabeth </span> Matus
          </h1>
          <p className="mb-4 text-gray-800">
            I’m Elizabeth Matus, a native Texan born and raised in Dallas. I
            grew up in what’s now called the Cedars, and for the past seven
            years, I’ve lived in Pleasant Grove, District 5. My childhood in an
            impoverished community brought challenges, but faith, family, and
            determination fueled my progress and resilience.
          </p>
          <p className="mb-4 text-gray-800">
            Leaving South Dallas shaped me, strengthening my commitment to
            ensuring safety and security for my family—a vision I now bring to
            our community. My purpose is to advocate for success and secure
            opportunities for our children, the future of District 5. If elected
            to the City Council, I’ll work to build a thriving neighborhood for
            all residents, prioritizing transparency in every decision.
          </p>
          <p className="mb-4 text-gray-800">
            Public safety is my top focus—supporting our first responders with
            proper staffing and fair pay to create a secure environment where
            our district can flourish. I want residents to feel confident
            engaging with the decisions shaping their community. With an open
            mind and heart, I’m here to serve, heal divisions, and restore
            unity. Closing the gap is what Dallas needs to succeed, and
            together, we can make it happen.
          </p>
        </motion.div>

        {/* Right Side Image (40%) */}
        <motion.div
          className="md:col-span-2 flex justify-center items-center w-full h-[280px] sm:h-[400px] md:h-full relative"
          initial={{ opacity: 0, x: 100 }} // Initial state (hidden and to the right)
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and move to the original position
          transition={{ duration: 1 }} // Animation duration
        >
          <Image
            src="/images/about.jpg"
            alt="About Elizabeth Matus"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
