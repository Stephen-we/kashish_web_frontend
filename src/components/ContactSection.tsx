
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9876543210",
      subtitle: "Mon-Sat 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@kashishenterprises.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Industrial Area, Sector 5",
      subtitle: "New Delhi, India - 110001"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      subtitle: "Sunday: Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-silver/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-industrial-blue/5 rounded-full -translate-x-32 translate-y-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-industrial-blue/10 border border-industrial-blue/20 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-industrial-blue" />
            <span className="text-sm font-inter text-steel-dark">Get In Touch</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-steel-dark mb-6">
            Let's Work <span className="text-industrial-blue">Together</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with us for a free consultation and detailed quote 
            tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
            <h3 className="font-poppins font-bold text-2xl text-steel-dark mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                />
              </div>

              <div>
                <label className="block font-inter font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-industrial-blue focus:border-transparent bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="ss-railings">SS Railings</option>
                  <option value="glass-railings">Glass Railings</option>
                  <option value="acp-paneling">ACP Paneling</option>
                  <option value="window-fabrication">Window Fabrication</option>
                  <option value="facade-work">Façade Work</option>
                  <option value="custom-fabrication">Custom Fabrication</option>
                </select>
              </div>

              <div>
                <label className="block font-inter font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-industrial-blue focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-industrial-blue hover:bg-blue-600 text-white py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-steel-dark mb-6">
                Get in touch
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                We're here to help bring your vision to life. Whether you have a specific project in mind 
                or need consultation on the best solutions for your needs, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="flex items-start space-x-4 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue/20 transition-colors">
                    <info.icon className="w-6 h-6 text-industrial-blue" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-steel-dark mb-1">
                      {info.title}
                    </h4>
                    <p className="font-inter text-gray-900 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="font-inter text-sm text-gray-600">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-poppins font-semibold text-lg mb-1">
                    Quick Chat on WhatsApp
                  </h4>
                  <p className="text-green-100 text-sm">
                    Get instant responses to your queries
                  </p>
                </div>
                <Button 
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  className="bg-white text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg font-semibold"
                >
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
