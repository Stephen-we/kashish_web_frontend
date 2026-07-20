import {
  Phone,
  MessageCircle,
  FileText,
} from "lucide-react";
import {
  trackPhoneCall,
  trackWhatsApp,
  trackQuoteRequest,
} from "@/lib/analytics";

const PHONE = "9763328158";

const WHATSAPP =
  "https://wa.me/919763328158?text=Hello%20Kashish%20Enterprises,%20I%20am%20interested%20in%20your%20fabrication%20services.";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">

        <a
         href={`tel:${PHONE}`}
            onClick={() => trackPhoneCall("Sticky Mobile")}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-xl transition-all hover:scale-110"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>

        <a
        href={WHATSAPP}
        onClick={() => trackWhatsApp("Sticky Desktop")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center shadow-xl transition-all hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        <a
          href="#contact"
            onClick={() => trackQuoteRequest("Sticky Desktop")}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-xl transition-all hover:scale-110"
        >
          <FileText className="w-6 h-6 text-white" />
        </a>

      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl">

        <div className="grid grid-cols-3">

          <a
          href={`tel:${PHONE}`}
          onClick={() => trackPhoneCall("Sticky Desktop")}
            className="py-4 bg-green-600 text-white text-center font-semibold"
          >
            Call
          </a>

          <a
            href={WHATSAPP}
              onClick={() => trackWhatsApp("Sticky Mobile")}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 bg-[#25D366] text-white text-center font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="#contact"
              onClick={() => trackQuoteRequest("Sticky Mobile")}
            className="py-4 bg-blue-600 text-white text-center font-semibold"
          >
            Quote
          </a>

        </div>

      </div>
    </>
  );
};

export default StickyCTA;