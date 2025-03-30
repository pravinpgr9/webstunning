
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: "Medical Field Portal",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "A comprehensive portal for medical professionals with secure patient data management."
  },
  {
    title: "E-Commerce Platform",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Customized shopping experience with advanced product filtering and recommendation system."
  },
  {
    title: "Finance Management App",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b75f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Secure and intuitive financial management application with real-time analytics."
  },
  {
    title: "AI-Powered Assistant",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", 
    description: "Intelligent virtual assistant that helps users automate tasks and get personalized recommendations."
  },
  {
    title: "Photography Portfolio",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1554410637-1a8209f7c3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Elegant image gallery with advanced filtering and immersive viewing experience."
  },
  {
    title: "Restaurant Ordering System",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Streamlined ordering system with inventory management and analytics dashboard."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative">
      <div className="container-width section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-medium text-blue-700">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Showcasing Our <span className="text-primary">Best Work</span>
          </h2>
          <p className="text-muted-foreground">
            We take pride in delivering high-quality digital solutions that meet our clients' needs
            and exceed their expectations. Here's a selection of our recent projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm group card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button variant="ghost" className="text-primary group-hover:text-primary-foreground group-hover:bg-primary transition-all p-0 flex items-center gap-2">
                  View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
