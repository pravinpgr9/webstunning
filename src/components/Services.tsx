
import { Code, Globe, ShoppingCart, Smartphone, Cpu, Server, PenTool, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Web Applications",
    description: "Complex web applications with advanced functionality, scalability, and security in mind."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
    title: "E-Commerce Solutions",
    description: "Customized e-commerce platforms that drive conversions, optimize sales, and enhance customer experience."
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "AI-Driven Solutions",
    description: "Innovative AI-powered applications that provide intelligent automation and data-driven insights."
  },
  {
    icon: <Server className="w-8 h-8 text-blue-500" />,
    title: "Healthcare Systems",
    description: "Specialized solutions for medical fields and hospital management with security and compliance."
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-500" />,
    title: "UI/UX Design",
    description: "User-centered design approach that creates intuitive, engaging, and aesthetically pleasing interfaces."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    title: "Fintech Platforms",
    description: "Secure and efficient financial technology solutions that streamline operations and enhance user trust."
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-blue-50">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-width section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-medium text-blue-700">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground">
            We offer a wide range of services to help businesses of all sizes establish their digital presence
            and streamline their operations with cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
