// client/src/components/SSRailingSection.tsx

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ss1 from "../assets/ss_railing1.jpg";  
import ss2 from "../assets/ss_railing2.jpg";
import ss3 from "../assets/ss_railing3.jpg";

const SSRailingSection = () => {
  return (
    <section id="ss-railing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          SS Railing
        </h1>

        {/* Carousel */}
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[ss1, ss2, ss3].map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`SS Railing ${idx + 1}`}
                  className="rounded-xl w-full h-96 object-cover shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Info */}
        <div className="mt-10 space-y-4 text-gray-700 text-left">
          <p><strong>What it is:</strong> Stainless Steel Railings are modern, durable safety and design solutions used in balconies, staircases, and facades.</p>
          <p><strong>How it looks:</strong> Sleek, shiny, and polished finish that adds elegance to interiors and exteriors.</p>
          <p><strong>Strength:</strong> High resistance to corrosion, rust, and wear.</p>
          <p><strong>Benefits:</strong> Low maintenance, long life, weather-resistant, stylish appearance.</p>
          <p><strong>Key Features:</strong> Polished finish, modular designs, customizable patterns.</p>
          <p><strong>Durability:</strong> 15–25 years with minimal upkeep.</p>
          <p><strong>Measurements (Common Sizes):</strong> Pipe diameter 38mm–50mm, thickness 1.5mm–2.5mm.</p>
        </div>
      </div>
    </section>
  );
};

export default SSRailingSection;
