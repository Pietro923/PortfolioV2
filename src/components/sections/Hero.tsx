"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from 'lucide-react';

const Hero = () => {
const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/in/pietrobonacossa/' },
    { name: 'Github', icon: '/icons/github.svg', url: 'https://github.com/Pietro923' },
    { name: 'Gmail', icon: '/icons/gmail.svg', url: 'mailto:jpbonacossa@gmail.com' },
    { name: 'Discord', icon: '/icons/discord.svg', url: 'https://discord.com/users/222491467275436033' },
];

return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 to-transparent dark:from-blue-950/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/20 to-transparent dark:from-purple-950/20 rounded-full blur-3xl" />
    </div>

    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto px-4 py-16"
    >
        <Card className="border-0 shadow-none bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
            <div className="space-y-8 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
            >
                <div className="inline-block mb-2">
                <Badge 
                    variant="secondary" 
                    className="text-sm font-medium px-4 py-1 bg-neutral-100 dark:bg-neutral-800"
                >
                    Programador Full-Stack
                </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Juan Pietro{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    Bonacossa
                </span>
                </h1>
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            >
                Tengo 21 años, soy de Tucumán, Argentina 🧉. Me especializo en tecnología 
                y desarrollo de software, siempre buscando aprender y mejorar. 
                Mi objetivo es participar en proyectos innovadores que amplíen mis 
                conocimientos y permitan aportar soluciones creativas y efectivas.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center gap-6"
            >
                {socialLinks.map((link, index) => (
                <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                    <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:scale-110 transition-all duration-300 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
                    asChild
                    >
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                    >
                        <img
                        src={link.icon}
                        alt={link.name}
                        className="w-5 h-5"
                        />
                    </a>
                    </Button>
                </motion.div>
                ))}
        </motion.div>
            <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                <a href="/Juan Pietro Bonacossa CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Descargar CV
                </a>
            </Button>
            </div>
        </CardContent>
        </Card>
    </motion.div>
    </section>
);
};

export default Hero;