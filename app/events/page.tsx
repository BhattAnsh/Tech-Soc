"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { EventsContent } from "./_components/EventsContent";

export default function Events() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <BackgroundBeams />
      <EventsContent />
    </div>
  );
} 