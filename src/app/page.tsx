"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import JoinUs from "@/components/JoinUS";
import Support from "@/components/Support";
import ElectionCount from "@/components/ElectionCount";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Home() {
  return (
    <main>
      <div>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }} // Start hidden
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1 }} // Smooth transition
        >
          <Hero />
        </motion.section>

        {/* About Section */}
        <section
          
    
          
        >
          <About />
        </section>

        {/* Join Us Section */}
        <section
      
       
        >
          <JoinUs />
        </section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0 }} // Start hidden
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1 }} // Smooth transition
        >
          <Support />
        </motion.section>

        {/* Election Count Section */}
        <motion.section
          initial={{ opacity: 0 }} // Start hidden
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1 }} // Smooth transition
        >
          <ElectionCount />
        </motion.section>
      </div>
    </main>
  );
}
