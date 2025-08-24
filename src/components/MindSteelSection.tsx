// client/src/components/MindSteelSection.tsx

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ms1 from "../assets/mind_steel_14.jpg";   // 👈 Insert your actual file names
import ms2 from "../assets/mind_steel_12.jpg";
import ms3 from "../assets/mind_steel_13.jpg";

const MindSteelSection = () => {
  return (
    <section id="mind-steel" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mind Steel</h2>

        {/* Carousel */}
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[ms1, ms2, ms3].map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`Mind Steel ${idx + 1}`}
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
          <p><strong>What it is:</strong> Mind Steel refers to high-strength mild steel used for structural fabrication.</p>
          <p><strong>How it looks:</strong> Matte or slightly polished steel with industrial finish.</p>
          <p><strong>Strength:</strong> Excellent tensile strength and load-bearing capacity.</p>
          <p><strong>Benefits:</strong> Cost-effective, durable, flexible for fabrication.</p>
          <p><strong>Key Features:</strong> Versatile, weldable, customizable thickness.</p>
          <p><strong>Durability:</strong> 20–30 years when maintained and coated properly.</p>
          <p><strong>Measurements (Common Sizes):</strong> Sheets 2mm–25mm, beams and angles in standard IS sizes.</p>
        </div>
      </div>
    </section>
  );
};

export default MindSteelSection;
