
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }} className="font-playfair text-2xl font-bold">
              <span className="text-teal-400">B</span>c<span className="text-teal-400">G</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-sm">
              Transforming data into meaningful insights to drive informed decision-making.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                {[
                  { label: 'LinkedIn', url: '#' },
                  { label: 'Twitter', url: '#' },
                  { label: 'GitHub', url: '#' },
                  { label: 'Kaggle', url: '#' },
                  { label: 'Email', url: 'mailto:your.email@example.com' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} [Your Name] | Data Analyst
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 text-teal-400 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
