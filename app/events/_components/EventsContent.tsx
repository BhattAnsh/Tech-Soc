'use client';

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { format } from 'date-fns';

export function EventsContent() {
  const [activeFilter, setActiveFilter] = useState("Upcoming");
  const categories = ["Upcoming", "Past", "All"];

  const events = [
    {
      id: 1,
      title: "Hackathon 2024",
      description: "Join us for a 24-hour coding challenge where you can build innovative solutions and compete for exciting prizes.",
      date: "2024-04-15",
      time: "09:00 AM",
      location: "Tech Hub, Main Campus",
      category: "Hackathon",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "AI Workshop Series",
      description: "Learn about the latest developments in AI and machine learning through hands-on workshops.",
      date: "2024-04-20",
      time: "02:00 PM",
      location: "Virtual Event",
      category: "Workshop",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      description: "Intensive 3-day bootcamp covering modern web development technologies and best practices.",
      date: "2024-05-01",
      time: "10:00 AM",
      location: "Innovation Center",
      category: "Workshop",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (error) {
        console.log(error)
      return dateString;
    }
  };

  const filteredEvents = events.filter(event => 
    activeFilter === "All" ? true : event.status === activeFilter
  );

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6">
        {/* Header and Filters */}
        <div className="relative top-16 bg-gray-950/80 backdrop-blur-md z-40 py-3 border-b border-gray-800">
          <h1 className="text-4xl font-bold mb-6">Events</h1>
          
          <div className="flex flex-wrap gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {category}
                {category !== "All" && ` (${events.filter(event => event.status === category).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Events List - Changed from grid to flex column */}
        <div className="mt-20 space-y-6 pb-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No events found.
            </div>
          ) : (
            filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                
                <div className=" p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Event Image */}
                    <div className="relative w-full md:w-[300px] h-[200px] rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-blue-600/90 backdrop-blur-sm text-white">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <h3 className="text-2xl font-bold mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="truncate">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={`/events/${event.id}`}
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  );
} 