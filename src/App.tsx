import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import ServicePage from "@/pages/ServicePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        {/* Global Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
