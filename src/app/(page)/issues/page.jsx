"use client";
import React from "react";
import { motion } from "framer-motion";

const Issues = () => {
  return (
    <motion.div 
      className="bg-[#012647]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 shadow-lg rounded-lg mt-25">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center  mt-25"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Issues
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg font-semibold text-white mb-4 underline"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Police
        </motion.p>

        <motion.p 
          className="text-white leading-relaxed text-sm sm:text-base md:text-lg mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          As your Councilwoman, I’ll stand unwaveringly behind our police, ensuring they have
          the funding, training, and equipment they need to protect District 5 from crime and
          chaos. I believe in upholding law and order as the foundation of a safe community—our
          officers put their lives on the line daily, and I’ll never support radical ideas that
          undermine their authority or leave our neighborhoods vulnerable. My plan includes
          increasing patrols in high-crime areas, strengthening recruitment efforts to bring in top
          talent, and fostering trust between law enforcement and the residents they serve.
        </motion.p>

        {/** Animated Sections */}
        <Section
          title="Infrastructure Improvements"
          content="I’m running to tackle District 5’s infrastructure challenges head-on—pothole-filled roads,
          aging water lines, and neglected public spaces deserve practical, no-nonsense
          solutions that respect your tax dollars. I’ll push to streamline project approvals, eliminate
          bureaucratic delays, and prioritize upgrades like smoother streets, reliable drainage to
          prevent flooding, and well-maintained parks for our families to enjoy. My focus is on
          getting results—real improvements you can see and feel—without letting waste or
          inefficiency drain our budget."
        />

        <Section
          title="Housing"
          content="I’m dedicated to making District 5 a place where families can put down roots, with a
          free-market approach that cuts through red tape and keeps taxes low to spur housing
          growth. I’ll advocate for fewer zoning restrictions that choke development, incentives for
          builders to create affordable single-family homes, and protections for property owners
          against overbearing regulations. My goal is simple: more opportunities for
          homeownership, less government interference, and a thriving community where working
          families and retirees alike can afford to live without being priced out."
        />

        <Section
          title="Unity in Communities"
          content="I believe District 5 can be a beacon of strength and togetherness, rooted in timeless
          values like personal responsibility, faith, and respect for one another. As your
          Councilwoman, I’ll champion initiatives like neighborhood watch programs, local events
          to celebrate our shared heritage, and partnerships with churches and community groups
          to support families in need. My vision is a united district where every resident—from
          young parents to seniors—feels heard, valued, and connected, building a legacy of
          pride we can all pass down to the next generation."
        />
      </div>
    </motion.div>
  );
};

/** Animated Section Component */
const Section = ({ title, content }) => (
  <motion.div 
    className="mb-8"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h2 
      className="text-lg sm:text-xl md:text-2xl font-bold bg-[#BD040E] text-white p-2 rounded-md inline-block"
      whileHover={{ scale: 1.05 }}
    >
      {title}
    </motion.h2>
    <p className="text-gray-100 leading-relaxed text-sm sm:text-base md:text-lg mt-3">
      {content}
    </p>
  </motion.div>
);

export default Issues;
