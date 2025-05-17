
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  percentage: number;
  category: 'technical' | 'tools' | 'soft';
}

const Skills = () => {
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills: Skill[] = [
    { name: "Data Analysis", percentage: 90, category: 'technical' },
    { name: "Statistical Modeling", percentage: 85, category: 'technical' },
    { name: "Data Visualization", percentage: 92, category: 'technical' },
    { name: "Database Management", percentage: 80, category: 'technical' },
    { name: "Machine Learning", percentage: 75, category: 'technical' },
  ];

  const toolSkills: Skill[] = [
    { name: "Python", percentage: 88, category: 'tools' },
    { name: "SQL", percentage: 85, category: 'tools' },
    { name: "Tableau", percentage: 90, category: 'tools' },
    { name: "Power BI", percentage: 92, category: 'tools' },
    { name: "Excel", percentage: 95, category: 'tools' },
    { name: "R", percentage: 80, category: 'tools' },
  ];

  const softSkills: Skill[] = [
    { name: "Problem Solving", percentage: 95, category: 'soft' },
    { name: "Communication", percentage: 90, category: 'soft' },
    { name: "Teamwork", percentage: 88, category: 'soft' },
    { name: "Critical Thinking", percentage: 92, category: 'soft' },
  ];

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div key={index} className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-teal-500 font-medium">{skill.percentage}%</span>
        </div>
        <Progress 
          value={showProgress ? skill.percentage : 0} 
          className="h-2 bg-gray-200"
        />
      </div>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse skill set that enables me to tackle complex data challenges 
            and deliver valuable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3">1</span>
              Technical Skills
            </h3>
            {renderSkills(technicalSkills)}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3">2</span>
              Tools & Technologies
            </h3>
            {renderSkills(toolSkills)}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3">3</span>
              Soft Skills
            </h3>
            {renderSkills(softSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
