import React from "react";

// ✅ Import images from src/assets
import img1 from "../assets/peb_vs_conventional_structure.jpg";
import img2 from "../assets/peb_vs_conventional_structure_1.jpg";
import img3 from "../assets/peb_vs_conventional_structure_2.jpg";

const ConventionalVsPebSection = () => {
  return (
    <section
      id="conventional-vs-peb"
      className="py-20 bg-gradient-to-b from-steel-dark via-steel/80 to-steel-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-yellow mb-12">
          Conventional vs PEB Structures
        </h2>

        {/* Intro Text */}
        <p className="text-center text-lg mb-10 text-gray-200 max-w-3xl mx-auto">
          Pre-Engineered Buildings (PEB) are modern alternatives to conventional steel structures.
          Here’s a detailed comparison to help you understand the differences.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600 rounded-lg overflow-hidden">
            <thead className="bg-industrial-yellow text-steel-dark">
              <tr>
                <th className="px-6 py-4 text-left text-lg">Criteria</th>
                <th className="px-6 py-4 text-left text-lg">Conventional Structure</th>
                <th className="px-6 py-4 text-left text-lg">PEB Structure</th>
              </tr>
            </thead>
            <tbody className="text-gray-100">
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 font-semibold">Speed of Construction</td>
                <td className="px-6 py-4">Takes more time (on-site fabrication & welding)</td>
                <td className="px-6 py-4">Faster (factory made components, easy assembly)</td>
              </tr>
              <tr className="border-b border-gray-700 bg-steel/40">
                <td className="px-6 py-4 font-semibold">Cost Efficiency</td>
                <td className="px-6 py-4">Higher cost due to extra labor and material wastage</td>
                <td className="px-6 py-4">Lower cost (optimized design, minimal wastage)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4 font-semibold">Flexibility in Design</td>
                <td className="px-6 py-4">Less flexible, modifications are costly</td>
                <td className="px-6 py-4">Highly flexible, customizable designs</td>
              </tr>
              <tr className="border-b border-gray-700 bg-steel/40">
                <td className="px-6 py-4 font-semibold">Durability</td>
                <td className="px-6 py-4">Strong but prone to on-site quality issues</td>
                <td className="px-6 py-4">Durable with factory quality control</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Applications</td>
                <td className="px-6 py-4">Factories, warehouses, and traditional buildings</td>
                <td className="px-6 py-4">Industries, warehouses, showrooms, commercial spaces</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={img1}
              alt="PEB vs Conventional Structure"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={img2}
              alt="Comparison Image 1"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={img3}
              alt="Comparison Image 2"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConventionalVsPebSection;
