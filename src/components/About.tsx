
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-lg bg-teal-50 transform rotate-12"></div>
              <div className="absolute w-64 h-64 rounded-lg bg-blue-50 transform -rotate-12"></div>
              <div className="relative z-10 w-full max-w-md">
                <svg className="w-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="400" height="300" rx="8" fill="#E5F9F6" stroke="#0D9488" strokeWidth="2"/>
                  <rect x="70" y="80" width="360" height="80" rx="4" fill="#F1F5F9"/>
                  <circle cx="100" cy="120" r="20" fill="#0D9488"/>
                  <rect x="130" y="110" width="120" height="10" rx="2" fill="#0D9488" opacity="0.7"/>
                  <rect x="130" y="130" width="80" height="10" rx="2" fill="#94A3B8"/>
                  <rect x="260" y="110" width="150" height="40" rx="4" fill="#0D9488" opacity="0.2"/>
                  <rect x="70" y="180" width="170" height="150" rx="4" fill="#F1F5F9"/>
                  <rect x="90" y="200" width="130" height="10" rx="2" fill="#0D9488"/>
                  <rect x="90" y="220" width="130" height="90" rx="4" fill="#0D9488" opacity="0.2"/>
                  <path d="M100 250 L110 270 L120 260 L130 280 L140 250 L150 290 L160 240 L170 260 L180 250" stroke="#0D9488" strokeWidth="2"/>
                  <rect x="260" y="180" width="170" height="150" rx="4" fill="#F1F5F9"/>
                  <circle cx="345" cy="255" r="50" fill="#F1F5F9" stroke="#0D9488" strokeWidth="2"/>
                  <path d="M345 220 v70 M310 255 h70" stroke="#0D9488" strokeWidth="2"/>
                  <path d="M320 230 A40 40 0 0 1 370 230" stroke="#0D9488" strokeWidth="2"/>
                  <path d="M320 280 A40 40 0 0 0 370 280" stroke="#0D9488" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Analyst & Visualization Specialist
            </h3>
            <p className="text-gray-600 mb-6">
              Hello! I'm Bedotroiee Chowdhury Guha, a passionate data analyst with expertise in transforming complex data into clear, 
              actionable insights. With over 5 years of experience in data analysis, visualization, and interpretation, 
              I help organizations make data-driven decisions that improve efficiency and drive growth.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines strong analytical skills with creative visualization techniques to communicate data 
              stories effectively. I believe that data should be accessible and understandable to everyone, regardless 
              of their technical background.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Name</h4>
                <p className="text-gray-800">Bedotroiee Chowdhury Guha</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Email</h4>
                <p className="text-gray-800">Bedotroiee.bt21@gmail.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Location</h4>
                <p className="text-gray-800">Bangalore, India</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Education</h4>
                <p className="text-gray-800">BTech Biotechnology, SRM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
