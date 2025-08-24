// client/src/components/WindowSlidingSection.tsx

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import w1 from "../assets/window_sliding_1.jpg";   // 👈 Your actual file names
import w2 from "../assets/window_sliding_2.jpg";
import w3 from "../assets/window_sliding_3.jpg";

const WindowSlidingSection = () => {
  return (
    <section id="window-sliding" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Window Sliding</h2>

        {/* Carousel */}
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[w1, w2, w3].map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`Window Sliding ${idx + 1}`}
                  className="rounded-xl w-full h-96 object-cover shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Info */}
        <div className="mt-10 space-y-4 text-gray-700">
          <p><strong>What it is:</strong> Sliding windows are modern window systems with horizontal sliding panels.</p>
          <p><strong>How it looks:</strong> Sleek glass panels framed with aluminum or UPVC.</p>
          <p><strong>Strength:</strong> Strong, lightweight, and weather resistant.</p>
          <p><strong>Benefits:</strong> Space-saving, easy to operate, good ventilation.</p>
          <p><strong>Key Features:</strong> Smooth sliding mechanism, lockable panels, customizable glass.</p>
          <p><strong>Durability:</strong> 20+ years with proper sealing and maintenance.</p>
          <p><strong>Measurements (Common Sizes):</strong> Standard 3ft x 4ft, customizable as per need.</p>
        </div>
      </div>
    </section>
  );
};

export default WindowSlidingSection;
