
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
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xl">Professional Image</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg bg-teal-500"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-lg border-2 border-teal-500"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Analyst & Visualization Specialist
            </h3>
            <p className="text-gray-600 mb-6">
              Hello! I'm [Your Name], a passionate data analyst with expertise in transforming complex data into clear, 
              actionable insights. With over [X] years of experience in data analysis, visualization, and interpretation, 
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
                <p className="text-gray-800">[Your Name]</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Email</h4>
                <p className="text-gray-800">your.email@example.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Location</h4>
                <p className="text-gray-800">[Your City], [Your Country]</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Education</h4>
                <p className="text-gray-800">[Your Degree], [Your University]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
