"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingBorder } from "@/components/ui/moving-border";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { JoinCard } from "./components/JoinCard";

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

  const stats = [
    { number: "1000+", label: "Active Members", className: "text-blue-400" },
    { number: "50+", label: "Tech Events", className: "text-indigo-400" },
    { number: "100+", label: "Projects", className: "text-violet-400" },
    { number: "20+", label: "Tech Talks", className: "text-purple-400" },
  ];

  const features = [
    {
      title: "Tech Workshops",
      description: "Hands-on learning experiences with cutting-edge technologies",
      icon: "🚀",
    },
    {
      title: "Hackathons",
      description: "Regular coding competitions to showcase your skills",
      icon: "💻",
    },
    {
      title: "Networking",
      description: "Connect with fellow tech enthusiasts and industry experts",
      icon: "🤝",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      
      {/* Adjusted Grid Size - approximately 1cm x 1cm (40px) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* For 2cm x 2cm grid, use: bg-[size:80px_80px] */}
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        <main className="pt-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            {/* Tech Decorative Elements */}
            <div className="absolute top-20 left-10 animate-float">
              <div className="text-6xl opacity-20">&lt;/&gt;</div>
            </div>
            <div className="absolute top-40 right-10 animate-float delay-200">
              <div className="text-6xl opacity-20">{`{ }`}</div>
            </div>
            
            {/* Glowing Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image 
                src="/logo.png" 
                alt="Tech Soc Logo" 
                width={120} 
                height={120}
                className="relative w-auto h-auto"
              />
            </motion.div>

            {/* Typewriter Effect */}
            <div className="mb-8">
              <TypewriterEffect words={words} />
            </div>

            {/* Description with Gradient Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-2xl mx-auto text-lg md:text-xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Your gateway to technology and innovation. Join our vibrant community of tech enthusiasts, developers, and creators.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-12"
            >
              <a href="/join" className="block">
                <MovingBorder
                  className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white border-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  <span className="px-8 py-4 inline-block font-semibold">
                    Join Tech Soc
                  </span>
                </MovingBorder>
              </a>
              <a href="/events" className="block">
                <MovingBorder
                  className="rounded-full bg-gray-900/80 text-white border-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="px-8 py-4 inline-block font-semibold">
                    View Events
                  </span>
                </MovingBorder>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500 flex justify-center p-2">
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1 h-1 rounded-full bg-gray-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-24 px-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="text-center p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className={`text-4xl font-bold mb-2 ${stat.className}`}>{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="py-24 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <JoinCard />
        </main>
      </div>
    </div>
  );
}
