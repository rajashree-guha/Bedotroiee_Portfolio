
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-12 md:mt-0">
            <div className="hero-content">
              <span className="inline-flex items-center bg-teal-100 text-teal-600 rounded-full px-3 py-1 text-sm font-medium mb-4">
                👋 Hi, I'm
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3">
                Bedotroiee Chowdhury Guha
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-teal-500 mb-5">
                Data Analyst
              </h2>
              <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg">
                Turning data into actionable insights that drive business decisions and growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  Contact Me
                  <ArrowRight size={18} />
                </button>
                <a 
                  href="/resume.pdf" 
                  download
                  className="px-6 py-3 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  Download CV
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative border-4 border-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-3/4 h-3/4 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 8h16M8 4v16" stroke="currentColor" strokeWidth="2" />
                  <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 10h4M12 16h1M12 12h2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
