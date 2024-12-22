import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Proyecto 1",
    description: "Una descripción detallada del proyecto 1, explicando sus características principales y el impacto que tiene.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/usuario/proyecto1",
    liveLink: "https://proyecto1.com"
  },
  {
    title: "Proyecto 2",
    description: "Una descripción detallada del proyecto 2, mostrando sus funcionalidades únicas y los problemas que resuelve.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/usuario/proyecto2",
    liveLink: "https://proyecto2.com"
  },
  {
    title: "Proyecto 3",
    description: "Una descripción detallada del proyecto 3, destacando sus características técnicas y el valor que aporta.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/usuario/proyecto3",
    liveLink: "https://proyecto3.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
       <div className="max-w-6xl mx-auto px-4 w-full">
       <div className="flex items-center gap-4 mb-16">
          <Code className="w-8 h-8" />
          <h2 className="text-4xl font-bold">Proyectos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end gap-4">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;