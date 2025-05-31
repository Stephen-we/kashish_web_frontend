
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "15+ years of industry experience",
    "500+ successful projects completed",
    "Premium quality materials only",
    "Custom solutions for every client",
    "Expert installation team",
    "Post-installation support"
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only premium materials and proven techniques."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every project is tailored to meet our clients' specific needs and vision."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead with the latest technologies and design trends in the industry."
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
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-industrial-blue/10 border border-industrial-blue/20 rounded-full px-6 py-2 mb-6">
                <Users className="w-4 h-4 text-industrial-blue" />
                <span className="text-sm font-inter text-steel-dark">About Us</span>
              </div>
              
              <h2 className="font-poppins font-bold text-4xl md:text-6xl text-steel-dark mb-6">
                Who We <span className="text-industrial-blue">Are</span>
              </h2>
              
              <p className="font-inter text-xl text-gray-600 leading-relaxed mb-8">
                Kashish Enterprises has been at the forefront of premium metal and glass fabrication for over 15 years. 
                We specialize in creating architectural solutions that combine <span className="font-semibold text-steel-dark">innovation</span>, 
                <span className="font-semibold text-steel-dark"> trust</span>, and 
                <span className="font-semibold text-steel-dark"> custom solutions</span> to exceed our clients' expectations.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center space-x-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-industrial-blue group-hover:scale-110 transition-transform" />
                  <span className="font-inter text-gray-700 group-hover:text-steel-dark transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-2xl text-steel-dark">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
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
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-poppins font-bold text-2xl text-steel-dark">500+</div>
                    <div className="font-inter text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-2xl text-steel-dark">15+</div>
                    <div className="font-inter text-sm text-gray-600">Years</div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-2xl text-steel-dark">100%</div>
                    <div className="font-inter text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-industrial-blue/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-industrial-yellow/20 rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
