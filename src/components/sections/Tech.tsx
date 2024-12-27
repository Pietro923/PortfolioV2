import React from 'react';
import { Grid2X2 } from 'lucide-react';

const Tech = () => {
  const technologies = {
    languages: [
      { name: 'HTML5', icon: '/icons/html5.svg' },
      { name: 'CSS3', icon: '/icons/css3.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'C#', icon: '/icons/csharp.svg' },
    ],
    databases: [
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'FireBase', icon: '/icons/firebase.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
    ],
    frameworks: [
      { name: 'Astro', icon: '/icons/astro.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
      { name: 'Express', icon: '/icons/express.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    ],
    tools: [
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
      { name: 'Vercel', icon: '/icons/vercel.svg' },
      { name: 'Notion', icon: '/icons/notion.svg' },
      { name: 'Netlify', icon: '/icons/netlify.svg' },
      { name: 'Trello', icon: '/icons/trello.svg' },
    ],
  }

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      languages: 'Lenguajes',
      databases: 'Bases de Datos',
      frameworks: 'Frameworks y Librerías',
      tools: 'Herramientas',
    };
  
    return titles[category] || 'Categoría desconocida';
  };

  return (
    <section id="tech" className="min-h-screen py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Grid2X2 className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />
          <h2 className="text-4xl font-light tracking-tight text-neutral-800 dark:text-neutral-200">
            Tecnologías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                {getCategoryTitle(category)}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group hover:scale-105 transition-all duration-200"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm font-medium text-center text-neutral-600 dark:text-neutral-400">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;