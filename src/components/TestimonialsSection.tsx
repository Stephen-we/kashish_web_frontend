
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Kashish Enterprises delivered exceptional quality on our residential project. Their stainless steel railings are not only beautiful but incredibly durable. The attention to detail was remarkable.",
      author: "Rajesh Kumar",
      designation: "Property Developer",
      company: "Kumar Constructions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      quote: "Working with Kashish Enterprises was a pleasure. They understood our vision for the glass facade and executed it flawlessly. Professional service from start to finish.",
      author: "Priya Sharma",
      designation: "Architect",
      company: "Design Studio",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      quote: "The quality of their fabrication work exceeded our expectations. Every piece was perfectly crafted and installed with precision. Highly recommend for any metal fabrication needs.",
      author: "Amit Patel",
      designation: "Project Manager",
      company: "Metro Infrastructure",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      quote: "Kashish Enterprises transformed our commercial building with their ACP paneling work. The result is stunning and has significantly enhanced our property value.",
      author: "Sunita Gupta",
      designation: "Building Owner",
      company: "Gupta Properties",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-industrial relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-industrial-blue/20 backdrop-blur-sm border border-industrial-blue/30 rounded-full px-6 py-2 mb-6">
            <Quote className="w-4 h-4 text-industrial-blue" />
            <span className="text-sm font-inter text-white">Testimonials</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6">
            What Our <span className="text-industrial-blue">Clients Say</span>
          </h2>
          
          <p className="font-inter text-xl text-industrial-silver max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work and service quality.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            {/* Large Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-industrial-blue/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-industrial-blue" />
            </div>

            {/* Testimonial Content */}
            <div className="mt-8">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-industrial-yellow fill-current" />
                ))}
              </div>

              <blockquote className="font-inter text-xl md:text-2xl text-white leading-relaxed text-center mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-industrial-blue/30"
                />
                <div className="text-center">
                  <div className="font-poppins font-bold text-lg text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="font-inter text-sm text-industrial-silver">
                    {testimonials[currentIndex].designation}
                  </div>
                  <div className="font-inter text-sm text-industrial-blue">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-industrial-blue scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-poppins font-bold text-3xl text-white mb-2">500+</div>
            <div className="font-inter text-industrial-silver">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="font-poppins font-bold text-3xl text-white mb-2">1000+</div>
            <div className="font-inter text-industrial-silver">Projects</div>
          </div>
          <div className="text-center">
            <div className="font-poppins font-bold text-3xl text-white mb-2">15+</div>
            <div className="font-inter text-industrial-silver">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-poppins font-bold text-3xl text-white mb-2">100%</div>
            <div className="font-inter text-industrial-silver">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
