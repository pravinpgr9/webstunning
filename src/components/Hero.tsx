
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-medium text-blue-700">Digital Solutions Provider</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Transforming Ideas</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Into Digital Reality
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              We design and develop high-quality digital solutions that help businesses thrive
              in the digital landscape. From web applications to mobile apps, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="btn-primary flex items-center gap-2 text-base">
                View Our Work <ArrowRight size={16} />
              </Button>
              <Button className="btn-outline text-base">Contact Us</Button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">200+</span>
                <span className="text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-muted-foreground">Team Members</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl hover-rotate">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Web development" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full blur-2xl opacity-70 -z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-teal-200 rounded-full blur-2xl opacity-70 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
