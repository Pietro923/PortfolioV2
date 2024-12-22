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
      { name: 'Trello', icon: '/icons/trello.svg' },
    ],
  }

  return (
    <section id="tech" className="min-h-screen py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-16">
          <Grid2X2 className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
          <h2 className="text-3xl font-light tracking-tight text-neutral-800 dark:text-neutral-200">
            Tecnologías
          </h2>
        </div>

        <div className="space-y-16">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
                {category === 'languages' && 'Lenguajes'}
                {category === 'databases' && 'Bases de Datos'}
                {category === 'frameworks' && 'Frameworks y Librerías'}
                {category === 'tools' && 'Herramientas'}
              </h3>
              
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex-none group"
                    >
                      <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-sm whitespace-nowrap text-neutral-600 dark:text-neutral-400">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;