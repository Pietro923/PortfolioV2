"use client"
import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Define el tipo de los certificados
type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
  issuer: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificado JavaScript",
    image: "/certificates/cert1.jpg", // Ajusta las rutas según tu estructura
    link: "https://platform.org/certificate/1",
    issuer: "Platform Name"
  },
  {
    id: 2,
    title: "Certificado React",
    image: "/certificates/cert2.jpg",
    link: "https://platform.org/certificate/2",
    issuer: "Platform Name"
  },
  {
    id: 3,
    title: "Certificado Node.js",
    image: "/certificates/cert3.jpg",
    link: "https://platform.org/certificate/3",
    issuer: "Platform Name"
  },
  // Añade más certificados según necesites
];

const Certs = () => {
const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

return (
    <section id="certs" className="min-h-screen flex items-center justify-center py-20">
    <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center gap-4 mb-16">
        <Award className="w-8 h-8" />
        <h2 className="text-4xl font-bold">Certificados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
            <div 
            key={cert.id} 
            className="relative group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
            >
            <div className="overflow-hidden rounded-lg shadow-md">
                <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm">{cert.issuer}</p>
                    <p className="mt-2 text-sm">Click para ver más</p>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        {selectedCert && (
            <DialogContent className="max-w-4xl">
            <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                <span>{selectedCert.title}</span>
                <div className="flex gap-2">
                    <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors"
                    >
                    <ExternalLink className="w-5 h-5" />
                    </a>
                    <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors"
                    >
                    <X className="w-5 h-5" />
                    </button>
                </div>
                </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
                <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Emitido por {selectedCert.issuer}
                </p>
                </div>
            </div>
            </DialogContent>
        )}
        </Dialog>
    </div>
    </section>
);
};

export default Certs;