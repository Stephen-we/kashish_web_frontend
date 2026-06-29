import {
  Phone,
  MessageCircle,
  FileText,
  Calendar,
  ArrowRight,
  FolderOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { trackEvent } from "@/lib/analytics";

const PHONE = "9763328158";

const WHATSAPP =
  "https://wa.me/919763328158?text=Hello%20Kashish%20Enterprises,%20I%20am%20interested%20in%20your%20fabrication%20services.%20Please%20contact%20me.";

const COMPANY_PROFILE =
  "https://drive.google.com/uc?export=view&id=1Y2hGWk6F5sk1hOBDLc0HY7Bc607dhKuO";

const callNow = () => {
  trackEvent("call_click", {
    button_name: "Hero Call Now",
    location: "Hero Section",
  });

  window.location.href = `tel:${PHONE}`;
};

const openWhatsApp = () => {
  trackEvent("whatsapp_click", {
    button_name: "Hero WhatsApp",
    location: "Hero Section",
  });

  window.open(WHATSAPP, "_blank");
};

const openCompanyProfile = () => {
  trackEvent("company_profile_open", {
    button_name: "Company Profile",
    location: "Hero Section",
  });

  window.open(COMPANY_PROFILE, "_blank");
};

const scrollToProjects = () => {
  trackEvent("view_projects_click", {
    button_name: "View Projects",
    location: "Hero Section",
  });

  document
    .getElementById("projects")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

const scrollToContact = () => {
  trackEvent("contact_section_open", {
    button_name: "Get Quote",
    location: "Hero Section",
  });

  document
    .getElementById("contact")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

const cardClass =
  "min-h-[120px] rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]";

export default function HeroCTA() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CALL */}
        <Button
          onClick={callNow}
          className={`${cardClass} bg-green-600 hover:bg-green-700 text-white`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <Phone className="w-9 h-9" />

            <h3 className="text-xl font-bold">
              Call Now
            </h3>

            <p className="text-sm opacity-90">
              Instant Support
            </p>

          </div>
        </Button>

        {/* WHATSAPP */}

        <Button
          onClick={openWhatsApp}
          className={`${cardClass} bg-[#25D366] hover:bg-[#1fb85a] text-white`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <MessageCircle className="w-9 h-9" />

            <h3 className="text-xl font-bold">
              WhatsApp
            </h3>

            <p className="text-sm opacity-90">
              Reply in Minutes
            </p>

          </div>
        </Button>

        {/* QUOTE */}

        <Button
          onClick={scrollToContact}
          className={`${cardClass} bg-blue-600 hover:bg-blue-700 text-white`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <FileText className="w-9 h-9" />

            <h3 className="text-xl font-bold">
              Get Quote
            </h3>

            <p className="text-sm opacity-90">
              Free Estimate
            </p>

          </div>
        </Button>

        {/* SITE VISIT */}

        <Button
          onClick={scrollToContact}
          className={`${cardClass} bg-white hover:bg-gray-50 text-black`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <Calendar className="w-9 h-9 text-yellow-500" />

            <h3 className="text-xl font-bold">
              Site Visit
            </h3>

            <p className="text-sm text-gray-500">
              Free Inspection
            </p>

          </div>
        </Button>

        {/* PROFILE */}

        <Button
          onClick={openCompanyProfile}
          className={`${cardClass} bg-white hover:bg-gray-50 text-black`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <FolderOpen className="w-9 h-9 text-blue-600" />

            <h3 className="text-xl font-bold">
              Company Profile
            </h3>

            <p className="text-sm text-gray-500">
              Download PDF
            </p>

          </div>
        </Button>

        {/* PROJECTS */}

        <Button
          onClick={scrollToProjects}
          className={`${cardClass} bg-white hover:bg-gray-50 text-black`}
        >
          <div className="flex flex-col items-center justify-center gap-2">

            <ArrowRight className="w-9 h-9 text-green-600" />

            <h3 className="text-xl font-bold">
              View Projects
            </h3>

            <p className="text-sm text-gray-500">
              500+ Completed Works
            </p>

          </div>
        </Button>

      </div>

    </div>
  );
}