// client/src/pages/ServicePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"; // react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import images properly from src/assets
import ss1 from "../assets/ss_railing.jpg";
import ss2 from "../assets/ss_railing1.jpg";
import ss3 from "../assets/ss_railing2.jpg";

import ms1 from "../assets/mind_steel_12.jpg";
import ms2 from "../assets/mind_steel_13.jpg";
import ms3 from "../assets/mind_steel_14.jpg";

import ws1 from "../assets/window_sliding_1.jpg";
import ws2 from "../assets/window_sliding_2.jpg";
import ws3 from "../assets/window_sliding_3.jpg";

import peb1 from "../assets/peb_vs_conventional_structure.jpg";
import peb2 from "../assets/peb_vs_conventional_structure_1.jpg";
import peb3 from "../assets/peb_vs_conventional_structure_2.jpg";

const serviceContent: Record<
  string,
  {
    title: string;
    images: string[];
    description: string;
    features: string[];
    layout?: "default" | "alt";
  }
> = {
  "ss-railing": {
    title: "SS Railing",
    images: [ss1, ss2, ss3],
    description:
      "Stainless Steel Railings are modern, durable safety and design solutions used in balconies, staircases, and facades.",
    features: [
      "Sleek, polished, and modern design",
      "High corrosion & rust resistance",
      "Low maintenance and long life",
      "Customizable modular patterns",
      "Durability of 15–25 years",
      "Common pipe sizes: Ø38–50mm, thickness 1.5–2.5mm",
    ],
    layout: "default",
  },
  "mind-steel": {
    title: "Mind Steel",
    images: [ms1, ms2, ms3],
    description:
      "Mind Steel provides precision engineering solutions with long-lasting performance and robust strength.",
    features: [
      "Precision engineering for strength",
      "Long-lasting durability",
      "Custom fabrication options",
      "Stylish and modern appearance",
      "Cost-efficient steel solutions",
    ],
    layout: "alt",
  },
  "window-sliding": {
    title: "Window Sliding",
    images: [ws1, ws2, ws3],
    description:
      "Premium sliding window systems designed for strength, beauty, and smooth functionality.",
    features: [
      "Smooth sliding mechanism",
      "Strong yet lightweight frames",
      "Noise and dust resistance",
      "Modern aesthetic look",
      "Weather-resistant durability",
    ],
    layout: "default",
  },
  "conventional-vs-peb": {
    title: "Conventional vs PEB",
    images: [peb1, peb2, peb3],
    description:
      "Comparison between Conventional structures and Pre-Engineered Buildings (PEB) with focus on durability, cost, and construction speed.",
    features: [
      "PEB reduces construction time significantly",
      "Conventional allows on-site design flexibility",
      "PEB is cost-efficient in the long run",
      "Conventional provides traditional robustness",
      "PEB supports modular & scalable expansion",
    ],
    layout: "alt",
  },
};

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceContent[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
        Service not found
      </div>
    );
  }

  // React Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen pt-28 md:pt-32 px-6 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          {service.title}
        </h1>

        {/* Layout variations */}
        {service.layout === "default" ? (
          <>
            {/* Carousel */}
            <Slider {...settings} className="mb-10">
              {service.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`${service.title} ${idx + 1}`}
                    className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                  />
                </div>
              ))}
            </Slider>

            {/* Description + Features */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base max-w-3xl mx-auto">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500"
                >
                  {f}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            {/* Alt Layout: Description + Carousel Side by Side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
              {/* Left: Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  Overview
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 text-gray-700">
                  {service.features.map((f, i) => (
                    <li
                      key={i}
                      className="p-3 bg-white rounded-lg shadow-sm border-l-4 border-green-500"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Carousel */}
              <Slider {...settings}>
                {service.images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${service.title} ${idx + 1}`}
                      className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
