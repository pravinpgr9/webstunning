
import { CheckCircle, Users, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Quality",
      description: "We never compromise on quality and follow industry best practices."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Collaboration",
      description: "We work closely with clients to ensure their vision becomes reality."
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from design to development."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description: "We embrace new technologies and innovative approaches to solve problems."
    }
  ];

  return (
    <section id="about" className="relative bg-blue-50">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-medium text-blue-700">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              We're a team of digital <span className="text-primary">innovators</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              WebStation is a forward-thinking digital agency specializing in creating exceptional digital experiences. 
              With over a decade of experience, we've helped businesses of all sizes establish their digital presence 
              and achieve their goals.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team consists of talented designers, developers, strategists, and project managers who are passionate 
              about delivering high-quality solutions that drive results. We believe in building long-term relationships 
              with our clients and becoming their trusted technology partners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-up">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-200 rounded-full blur-2xl opacity-70 -z-0"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-teal-200 rounded-full blur-2xl opacity-70 -z-0"></div>
            
            <div className="absolute -bottom-10 -right-10 md:bottom-8 md:right-8 bg-white p-6 rounded-xl shadow-lg animate-fade-up">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Experts</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
