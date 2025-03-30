
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-width py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">WebStation</h3>
            <p className="text-blue-200 mb-6 max-w-xs">
              Transforming ideas into digital reality through innovative web and mobile solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white p-2 bg-blue-800 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white p-2 bg-blue-800 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white p-2 bg-blue-800 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white p-2 bg-blue-800 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white p-2 bg-blue-800 rounded-full transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">AI-Driven Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-blue-200 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter to receive updates and insights on technology.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-blue-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200">
            © {currentYear} WebStation. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
