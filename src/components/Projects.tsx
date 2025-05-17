
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tools: string[];
  link: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Dashboard",
      description: "An interactive dashboard visualizing quarterly sales data with regional breakdowns and trend analysis.",
      category: "visualization",
      image: "sales-dashboard",
      tools: ["Tableau", "Excel", "SQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Analysis of customer behavior patterns using clustering algorithms to identify distinct market segments.",
      category: "analysis",
      image: "customer-segmentation",
      tools: ["Python", "scikit-learn", "Pandas"],
      link: "#"
    },
    {
      id: 3,
      title: "Predictive Maintenance Model",
      description: "Machine learning model to predict equipment failures before they occur, reducing downtime by 37%.",
      category: "machine-learning",
      image: "predictive-maintenance",
      tools: ["Python", "TensorFlow", "Power BI"],
      link: "#"
    },
    {
      id: 4,
      title: "Market Trend Analysis",
      description: "Comprehensive analysis of market trends over a five-year period with forecasting of future directions.",
      category: "analysis",
      image: "market-trends",
      tools: ["R", "ggplot2", "Excel"],
      link: "#"
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Data-driven optimization of supply chain processes leading to 15% reduction in logistics costs.",
      category: "optimization",
      image: "supply-chain",
      tools: ["Python", "Tableau", "SQL"],
      link: "#"
    },
    {
      id: 6,
      title: "Financial Performance Dashboard",
      description: "Interactive visualization of key financial metrics with drill-down capabilities for detailed analysis.",
      category: "visualization",
      image: "financial-dashboard",
      tools: ["Power BI", "Excel", "SQL"],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'visualization', label: 'Data Visualization' },
    { id: 'analysis', label: 'Data Analysis' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'optimization', label: 'Optimization' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent data analysis and visualization projects that have delivered meaningful insights.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeFilter === category.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[{project.image} Image]</span>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
            View All Projects <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
