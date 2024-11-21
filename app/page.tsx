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
      className: "text-blue-500",
    },
    {
      text: "to",
      className: "text-indigo-500",
    },
    {
      text: "Tech",
      className: "text-violet-500",
    },
    {
      text: "Soc.",
      className: "text-purple-500",
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
    <div className="relative min-h-screen bg-gray-950 text-white">
      <BackgroundBeams />
      
      <div className="relative z-10">
        <main className="pt-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <Image 
              src="/logo.png" 
              alt="Tech Soc Logo" 
              width={120} 
              height={120}
              className="w-auto h-auto mb-8"
            />
            <div className="scale-[2] md:scale-100">
              <TypewriterEffect words={words} />
            </div>
            <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl px-4">
              Your gateway to technology and innovation. Join our vibrant community of tech enthusiasts, developers, and creators.
            </p>
            
            <div className="flex gap-4 mt-12">
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
                  className="rounded-full bg-gray-900 text-white border-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                >
                  <span className="px-8 py-4 inline-block font-semibold">
                    View Events
                  </span>
                </MovingBorder>
              </a>
            </div>
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
