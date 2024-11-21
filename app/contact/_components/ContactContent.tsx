'use client';

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6">
        {/* Header */}
        <div className="sticky top-16 bg-gray-950/80 backdrop-blur-md z-40 py-6 border-b border-gray-800">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-400">Get in touch with us for any questions or inquiries.</p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 p-6"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-400">contact@techsoc.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-400">Tech Hub, Main Campus</p>
                    <p className="text-gray-400">University Name</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (234) 567-8900</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 