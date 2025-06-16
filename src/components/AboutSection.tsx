import { Award, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We uphold the highest standards by using premium-grade materials and industry-proven methods to ensure long-lasting results."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Every project is uniquely crafted to reflect the specific needs, preferences, and vision of our clients."
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "We embrace the latest technologies and design trends to deliver modern, forward-thinking architectural outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-silver/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-industrial-blue/5 rounded-full -translate-x-16 translate-y-16"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-industrial-blue/10 border border-industrial-blue/20 rounded-full px-6 py-2 mb-6">
                <Users className="w-4 h-4 text-industrial-blue" />
                <span className="text-sm font-inter text-steel-dark">About Us</span>
              </div>
              
              <h2 className="font-poppins font-bold text-4xl md:text-6xl text-steel-dark mb-6">
                Who We <span className="text-industrial-blue">Are</span>
              </h2>
              
              <p className="font-inter text-xl text-gray-600 leading-relaxed mb-8">
                Kashish Enterprises has been a trusted name in premium metal and glass fabrication since <span className="font-semibold text-steel-dark">2011</span>. 
                We specialize in delivering bespoke architectural solutions grounded in 
                <span className="font-semibold text-steel-dark"> innovation</span>, 
                <span className="font-semibold text-steel-dark"> reliability</span>, and 
                <span className="font-semibold text-steel-dark"> exceptional craftsmanship</span>.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl text-steel-dark">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div 
                    key={value.title}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-industrial-blue/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue/20 transition-colors">
                      <value.icon className="w-6 h-6 text-industrial-blue" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg text-steel-dark mb-1">
                        {value.title}
                      </h4>
                      <p className="font-inter text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern architectural building showcasing our work"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-industrial-blue/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-industrial-yellow/20 rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
