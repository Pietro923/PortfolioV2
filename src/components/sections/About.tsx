import React from 'react';
import { User, Code, Globe, Rocket, Book, AppWindow } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Desarrollo Web Full-Stack",
      description: "Desarrollo de aplicaciones web modernas y escalables."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "Diseño de interfaces de usuario elegantes y funcionales utilizando Tailwind CSS."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Optimización",
      description: "Optimización del rendimiento de aplicaciones web tanto estáticas como dinámicas."
    },
    {
      icon: <AppWindow className="w-5 h-5" />,
      title: "Apps de Escritorio",
      description: "Creación de aplicaciones de escritorio multiplataforma robustas y eficientes."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center gap-3 mb-16">
      <User className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
      <h2 className="text-3xl font-light tracking-tight text-neutral-800 dark:text-neutral-200">
        Sobre mí
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Imagen */}
      <div className="space-y-8">
        <div className="relative group">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="Pietro/me.jpeg"
              alt="Juan Pietro Bonacossa"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-10">
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Soy Juan Pietro Bonacossa, un desarrollador Full-Stack de 21 años de Tucumán, Argentina. Me gradué de la Tecnicatura Universitaria en Programación en la UTN FRT (Universidad Tecnológica Nacional, Facultad Regional Tucumán).
          </p>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Apasionado por la tecnología y siempre en busca de oportunidades para seguir creciendo profesionalmente. Mi objetivo es prepararme para enfrentar los desafíos del mundo laboral mientras sigo perfeccionando mis habilidades técnicas.
          </p>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Con un nivel B2 de inglés adquirido en Aticana, me interesa profundamente el desarrollo de videojuegos, explorando tecnologías como Unity y Godot en mi tiempo libre.
          </p>
        </div>
      </div>
    </div>

    {/* Características */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="group border-0 shadow-none bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-colors"
        >
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
  );
};

export default About;
