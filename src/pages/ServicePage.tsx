// client/src/pages/ServicePage.tsx

import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ PEB PROMO SECTION
import PebPromoSection from "@/components/sections/PebPromoSection";

// Images
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
      "Common pipe sizes: Ø38–50mm",
    ],
    layout: "default",
  },

  "mind-steel": {
    title: "Mind Steel",
    images: [ms1, ms2, ms3],
    description:
      "Mind Steel provides precision engineering solutions with long-lasting performance and robust strength.",
    features: [
      "Precision engineering",
      "Long-lasting durability",
      "Custom fabrication options",
      "Stylish modern appearance",
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
      "Noise & dust resistance",
      "Weather-proof design",
      "Modern aesthetics",
    ],
    layout: "default",
  },

  // ✅ THIS IS THE IMPORTANT ONE
  "conventional-vs-peb": {
    title: "Conventional vs PEB",
    images: [peb1, peb2, peb3],
    description:
      "Comparison between Conventional structures and Pre-Engineered Buildings (PEB) focusing on cost, speed, and scalability.",
    features: [
      "PEB is 40–60% faster",
      "Lower long-term cost",
      "Factory controlled quality",
      "Easy future expansion",
    ],
    layout: "alt",
  },
};

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceContent[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Service not found
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 px-4 md:px-6 pb-16 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {service.title}
        </h1>

        {/* SERVICE CONTENT */}
        {service.layout === "default" ? (
          <>
            <div className="w-full overflow-hidden">
            <Slider {...settings}>
              {service.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-2xl h-[350px] w-full object-cover"
                  alt=""
                />
              ))}
            </Slider>
          </div>

            <p className="text-center text-lg text-gray-700 mb-8">
              {service.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500"
                >
                  {f}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 overflow-hidden">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li
                      key={i}
                      className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Slider {...settings}>
                {service.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-2xl h-[350px] w-full object-cover"
                  />
                ))}
              </Slider>
            </div>
          </>
        )}

        {/* ✅ ONLY SHOW THIS FOR CONVENTIONAL VS PEB */}
        {serviceId === "conventional-vs-peb" && (
          <div className="mt-20">
            <PebPromoSection />
          </div>
        )}

      </div>
    </div>
  );
};

export default ServicePage;
