import {
  Briefcase,
  Building2,
  Users,
  ShieldCheck,
  Clock3,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: Building2,
    number: "500+",
    title: "Projects Completed",
  },
  {
    icon: Users,
    number: "150+",
    title: "Happy Clients",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Quality Commitment",
  },
  {
    icon: Clock3,
    number: "24×7",
    title: "Customer Support",
  },
  {
    icon: MapPinned,
    number: "Free",
    title: "Site Visit",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Customers Trust Kashish Enterprises
          </h2>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Delivering premium fabrication solutions with quality,
            precision and customer satisfaction for over 15 years.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-5">

                  <Icon className="w-8 h-8 text-blue-600"/>

                </div>

                <h3 className="text-4xl font-bold text-gray-900">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}