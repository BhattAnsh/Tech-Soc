'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function MembersContent() {
  const members = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Computer Science student passionate about AI and machine learning.",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "john@techsoc.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Software Engineering student with a focus on web development.",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "jane@techsoc.com"
    },
    // Add more members...
  ];

  const categories = ["Core Team", "Developers", "Designers", "All"];
  
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6">
        {/* Header */}
        <div className="sticky top-16 bg-gray-950/80 backdrop-blur-md z-40 py-6 border-b border-gray-800">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          
          <div className="flex flex-wrap gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Members Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
              
              <div className="relative p-6">
                {/* Member Image */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full ring-2 ring-blue-500/20"
                  />
                </div>

                {/* Member Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <Link
                      href={member.github}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      target="_blank"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
} 