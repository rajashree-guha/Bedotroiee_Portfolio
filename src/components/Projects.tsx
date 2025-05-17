
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
  imageAlt: string;
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
      imageAlt: "Dashboard showing sales data with colorful charts and graphs",
      tools: ["Tableau", "Excel", "SQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Analysis of customer behavior patterns using clustering algorithms to identify distinct market segments.",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      imageAlt: "Visual representation of customer segments with colorful clusters",
      tools: ["Python", "scikit-learn", "Pandas"],
      link: "#"
    },
    {
      id: 3,
      title: "Predictive Maintenance Model",
      description: "Machine learning model to predict equipment failures before they occur, reducing downtime by 37%.",
      category: "machine-learning",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
      imageAlt: "Machine learning model visualization with predictive analytics",
      tools: ["Python", "TensorFlow", "Power BI"],
      link: "#"
    },
    {
      id: 4,
      title: "Market Trend Analysis",
      description: "Comprehensive analysis of market trends over a five-year period with forecasting of future directions.",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      imageAlt: "Line graphs showing market trends over time with forecast projections",
      tools: ["R", "ggplot2", "Excel"],
      link: "#"
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Data-driven optimization of supply chain processes leading to 15% reduction in logistics costs.",
      category: "optimization",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      imageAlt: "Supply chain network diagram with optimization indicators",
      tools: ["Python", "Tableau", "SQL"],
      link: "#"
    },
    {
      id: 6,
      title: "Financial Performance Dashboard",
      description: "Interactive visualization of key financial metrics with drill-down capabilities for detailed analysis.",
      category: "visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      imageAlt: "Financial dashboard with KPI metrics and interactive charts",
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.imageAlt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
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
