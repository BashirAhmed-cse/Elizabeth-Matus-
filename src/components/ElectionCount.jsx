"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const ElectionCount = () => {
  // Set the target date to March 25, 2025
  const targetDate = new Date("2025-05-03T07:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url(/images/cowndown.jpg)" }}
      initial={{ opacity: 0 }} // Start hidden
      animate={{ opacity: 1 }} // Fade in when in view
      transition={{ duration: 1 }} // Smooth transition
    >
      <div className="text-center p-8 bg-opacity-5 backdrop-blur-lg rounded-lg shadow-2xl">

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white animate-pulse"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ELECTION DAY COUNTDOWN
        </motion.h2>

        {/* Countdown Timer */}
        <div className="flex justify-center mt-6 text-4xl md:text-5xl font-extrabold space-x-6">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <motion.div
              key={label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }} // Delay for each value
            >
              <span className="text-white animate-bounce">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-white mt-2">
                {label.toUpperCase()}
              </span>
              {index < 3 && <span className="text-[#BD040E] text-4xl"></span>}
            </motion.div>
          ))}
        </div>

        {/* Animation for numbers */}
        <motion.div
          className="mt-4 text-lg font-semibold text-[#BD040E] animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Time is ticking away! 🕒</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ElectionCount;
