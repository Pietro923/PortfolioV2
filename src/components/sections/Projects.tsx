"use client"
import React, { useState } from 'react';
import { Code, Github, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Interfaces para las props
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;
  title: string;
}

interface ImageCarouselProps {
  images: string[];
  title: string;
}

// Componente Modal para la imagen ampliada
const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, currentIndex, setCurrentIndex, title }) => {
  if (!isOpen) return null;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex: number) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex: number) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-7xl max-h-[90vh] w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] mx-auto object-contain"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        title={title}
      />
    </div>
  );
};

const projects = [
  {
    title: "Aplicación Web RRHH - Pueble SA",
    description: "Desarrollada para Pueble SA, esta aplicación web optimiza la gestión de recursos humanos dentro de la empresa. Proporciona herramientas para administrar empleados, roles, y permisos, además de facilitar el seguimiento de actividades laborales y la generación de reportes personalizados.",
    images: [
      "projects/rrhhpueble/rrhh1.png",
      "projects/rrhhpueble/rrhh2.png",
      "projects/rrhhpueble/rrhh3.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/Pietro923/recursos-humanos-app",
    liveLink: "https://proyecto1.com"
  },
  {
    title: "Sistema de Gestión - Alenort",
    description: "Un sistema integral diseñado para Alenort - Distribuidora Avícola, que optimiza la gestión de roles administrativos como Encargado de Logística, Administrador General y Vendedor.",
    images: [
      "projects/wordlebyp/wordlebyp1.png",
      "projects/wordlebyp/wordlebyp2.png",
      "projects/wordlebyp/wordlebyp3.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/Pietro923/Punto-de-venta-Alenort",
    liveLink: "https://proyecto2.com"
  },
  {
    title: "Portfolio Versión Nº 1 - Pietro Bonacossa",
    description: "Este es mi primer Portfolio realizado en Astro, utilizando Tailwind. Lo subí como plantilla disponible en Astro para que cualquier programador pueda crear su propio Portfolio realizando pequeños cambios para su personalización. Plantilla disponible en <a href='https://astro.build/themes/details/portfolio-apto-para-todo-pblico-portfolio-suitable-for-all-audiences/' target='_blank' class='text-blue-600''>Astro</a>.",
    images: [
      "projects/portfoliov1/portfoliov1-1.png",
      "projects/portfoliov1/portfoliov1-2.png",
      "projects/portfoliov1/portfoliov1-3.png",
      "projects/portfoliov1/portfoliov1-4.png",
      "projects/portfoliov1/portfoliov1-5.png",
    ],
    technologies: ["Astro", "Tailwind CSS", "Netlify"],
    githubLink: "https://github.com/Pietro923/portfolio-Pietro",
    liveLink: "https://portfolio-pietro.netlify.app/"
  },
  {
    title: "Wordle by P",
    description: "Con el objetivo de practicar typescript y la programacion web cree un Wordle o Adivina la Palabra ya que me gusta mucho jugar ese juego.",
    images: [
      "projects/wordlebyp/wordlebyp1.png",
      "projects/wordlebyp/wordlebyp2.png",
      "projects/wordlebyp/wordlebyp3.png",
    ],
    technologies: ["Next.js", "Tailwind CSS","TypeScript", "Vercel",],
    githubLink: "https://github.com/Pietro923/wordle-by-P",
    liveLink: "https://wordle-by-p.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Code className="w-8 h-8" />
          <h2 className="text-4xl font-bold">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64">
                <ImageCarousel 
                  images={project.images} 
                  title={project.title}
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription 
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-end gap-6 pt-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </a>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;