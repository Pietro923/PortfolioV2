'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const response = await emailjs.send(
            'Portfolio-Contact', // Reemplaza con tu Service ID
            'template_czatkd1', // Reemplaza con tu Template ID
            {
              from_name: formData.nombre,
              reply_to: formData.correo,
              subject: formData.asunto,
              message: formData.mensaje,
            },
            '0M277pAq9VZnYfBbu' // Reemplaza con tu Public Key
          );

          if (response.status === 200) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarte conmigo. Te responderé lo antes posible.",
        });
        setFormData({
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "San Miguel de Tucumán, Tucumán, Argentina",
      link: null
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Correo Electrónico",
      content: "jpbonacossa@gmail.com",
      link: "mailto:jpbonacossa@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      content: "(+54) 3816618632",
      link: "https://wa.me/3816618632"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center gap-4 mb-16">
          <Send className="w-8 h-8" />
          <h2 className="text-4xl font-bold">Contactame</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{info.title}:</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mapa o imagen decorativa */}
            <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7725037034853!2d-65.22755378547264!3d-26.80828509487683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d1f9a6b16f9%3A0xe31c6dd8c20ff091!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses-419!2s!4v1700000000000!5m2!1ses-419!2s"
                width="100%"
                height="192"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
            </Card>
          </div>

          {/* Formulario */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xl font-semibold text-gray-800 text-center">Contacto</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="correo"
                      placeholder="Correo electrónico"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="mensaje"
                    placeholder="Tu mensaje..."
                    required
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;