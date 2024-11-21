import { BackgroundBeams } from "@/components/ui/background-beams";
import { GalleryContent } from "./_components/GalleryContent";

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white pt-16">
      <BackgroundBeams />
      <GalleryContent />
    </div>
  );
} 