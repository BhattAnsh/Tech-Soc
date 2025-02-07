"use client";

import { MovingBorder } from "@/components/ui/moving-border";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const words = [
    {
      text: "Welcome",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "to",
      className: "text-slate-300 dark:text-slate-300", 
    },
    {
      text: "Tech",
      className: "text-violet-500 dark:text-violet-500",
    },
    {
      text: "Soc.",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Refined Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

      <main className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16 space-y-12">
          {/* Enhanced Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-20" />
            <Image 
              src="/logo.png" 
              alt="Tech Soc Logo" 
              width={140} 
              height={140}
              className="relative w-auto h-auto"
            />
          </motion.div>

          {/* Typewriter with adjusted spacing */}
          <div className="my-8">
            <TypewriterEffect words={words} />
          </div>

          {/* Refined Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            Your gateway to technology and innovation. Join our vibrant community of tech enthusiasts, developers, and creators.
          </motion.p>
          
          {/* Refined CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6"
          >
            <a href="/join">
              <MovingBorder
                className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white border-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="px-8 py-4 inline-block font-semibold tracking-wide">
                  Join Tech Soc
                </span>
              </MovingBorder>
            </a>
            <a href="/events">
              <MovingBorder
                className="rounded-full bg-gray-900/80 text-white border-gray-800 hover:border-gray-700 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="px-8 py-4 inline-block font-semibold tracking-wide">
                  View Events
                </span>
              </MovingBorder>
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
