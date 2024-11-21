'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function JoinCard() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-gray-800"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative px-6 py-16 md:px-12 md:py-24 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Ready to Join TechSoc?
          </h2>
          
          <p className="text-gray-400 max-w-2xl">
            Join our vibrant community of tech enthusiasts, developers, and innovators. 
            Get access to exclusive events, workshops, and networking opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="/join"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors group"
            >
              Join Now
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-gray-800 w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-400">500+</span>
              <span className="text-gray-400 text-sm">Members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-emerald-400">50+</span>
              <span className="text-gray-400 text-sm">Events</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-purple-400">20+</span>
              <span className="text-gray-400 text-sm">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-pink-400">10+</span>
              <span className="text-gray-400 text-sm">Partners</span>
            </div>
          </div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
            <div className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-600 to-blue-600 opacity-20 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 