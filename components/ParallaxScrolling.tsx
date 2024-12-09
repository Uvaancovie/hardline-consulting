"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";


const ParallaxScroll = () => {
  const { scrollYProgress } = useScroll();

  // Progress bar animation
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax animation for image and text
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  // Define your image paths
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-xl">
          <a href="https://motion.dev" target="_blank" rel="noopener noreferrer">
            Parallax and Scroll-Snapping
          </a>
        </h1>
        <button
          className="bg-transparent border-none text-white cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </header>

      {/* Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 h-2 bg-yellow-400 bottom-4 origin-left"
        style={{ scaleX: progressScale }}
      ></motion.div>

      {/* Main Content */}
      <main className="snap-y snap-mandatory">
        {images.map((image, index) => (
          <section
            key={index}
            className="h-screen flex justify-center items-center snap-start relative"
          >
            <motion.div
              className="w-72 h-96 bg-white overflow-hidden relative"
              style={{
                y: parallaxY, // Use shared `parallaxY` animation
              }}
            >
              <Image
                src={image}
                alt={`Parallax Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <motion.h2
                className="absolute text-yellow-400 font-bold text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  y: parallaxY, // Use shared `parallaxY` animation
                }}
              >
                #{(index + 1).toString().padStart(3, "0")}
              </motion.h2>
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ParallaxScroll;
