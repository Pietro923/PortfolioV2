// src/lib/i18n.ts
'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      hero: {
        badge:"Open to Work",
        text:"Tengo 21 años, soy de Tucumán, Argentina 🧉. Me especializo en tecnología y desarrollo de software, siempre buscando aprender y mejorar. Mi objetivo es participar en proyectos innovadores que amplíen mis conocimientos y permitan aportar soluciones creativas y efectivas.",
        buttoncv:"Descargar CV"
      },
      about: {
        title:"Sobre mí",
        text1:"Soy Juan Pietro Bonacossa, un desarrollador Full-Stack de 21 años de Tucumán, Argentina. Me gradué de la Tecnicatura Universitaria en Programación en la UTN FRT (Universidad Tecnológica Nacional, Facultad Regional Tucumán).",
        text2:"Apasionado por la tecnología y siempre en busca de oportunidades para seguir creciendo profesionalmente. Mi objetivo es prepararme para enfrentar los desafíos del mundo laboral mientras sigo perfeccionando mis habilidades técnicas.",
        text3:"Con un nivel B2 de inglés adquirido en Aticana, me interesa profundamente el desarrollo de videojuegos, explorando tecnologías como Unity y Godot en mi tiempo libre.",
        features: {
          webdev: {
            title: "Desarrollo Web Full-Stack",
            description: "Desarrollo de aplicaciones web modernas y escalables."
          },
          design: {
            title: "UI/UX Design",
            description: "Diseño de interfaces de usuario elegantes y funcionales utilizando Tailwind CSS."
          },
          optimization: {
            title: "Optimización",
            description: "Optimización del rendimiento de aplicaciones web tanto estáticas como dinámicas."
          },
          desktop: {
            title: "Apps de Escritorio",
            description: "Creación de aplicaciones de escritorio multiplataforma robustas y eficientes."
          }
        }
      },
      tech: {
        title:"Tecnologías",
        cat1:"Lenguajes",
        cat2:"Bases de Datos",
        cat3:"Frameworks y Librerías",
        cat4:"Herramientas"
      },
      projects: {
        title: "Proyectos",
        button1: "Código",
        button2: "Demo",
        projects: {
          pueble: {
            title: "Aplicación Web RRHH - Pueble SA",
            description: "Desarrollada para Pueble SA, con el objetivo de optimizar la gestión de recursos humanos dentro de la empresa. Proporciona herramientas para administrar empleados, roles, y permisos, además de facilitar el seguimiento de actividades laborales y las nominas de los empleados."
          },
          portfolio: {
            title: "Portfolio Versión Nº 1 - Pietro Bonacossa",
            description: "Este es mi primer Portfolio realizado en Astro, utilizando Tailwind. Lo subí como plantilla disponible en Astro para que cualquier programador pueda crear su propio Portfolio realizando pequeños cambios para su personalización. Plantilla disponible en <a href='https://astro.build/themes/details/portfolio-apto-para-todo-pblico-portfolio-suitable-for-all-audiences/' target='_blank' class='text-blue-600'>Astro</a>."
          },
          wordle: {
            title: "Wordle by P",
            description: "Con el objetivo de practicar typescript y la programacion web cree un Wordle o Adivina la Palabra ya que me gusta mucho jugar ese juego."
          }
        }
      },
      certs: {
        title:"Certificados",
        button:"Click para ver más",
        emitido:"Emitido por"
      },
      contact: {
        title: "Contáctame",
        form: {
          title: "Contacto",
          name: "Nombre",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Tu mensaje...",
          sendButton: "Enviar Mensaje",
          sending: "Enviando...",
          success: {
            title: "¡Mensaje enviado!",
            description: "Gracias por contactarte conmigo. Te responderé lo antes posible."
          },
          error: {
            title: "Error",
            description: "No se pudo enviar el mensaje. Por favor, intenta nuevamente."
          }
        },
        info: {
          location: {
            title: "Ubicación",
            content: "San Miguel de Tucumán, Tucumán, Argentina"
          },
          email: {
            title: "Correo Electrónico",
            content: "jpbonacossa@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+54) 3816618632"
          }
        }
      }
    }
  },
  en: {
    translation: {
      hero: {
        badge: "Open to Work",
        text: "I'm 21 years old, from Tucumán, Argentina 🧉. I specialize in technology and software development, always seeking to learn and improve. My goal is to participate in innovative projects that expand my knowledge and allow me to contribute creative and effective solutions.",
        buttoncv: "Download CV"
      },
      about: {
        title: "About me",
        text1: "I'm Juan Pietro Bonacossa, a 21-year-old Full-Stack developer from Tucumán, Argentina. I graduated with a University Technical Degree in Programming from UTN FRT (National Technological University, Tucumán Regional Faculty).",
        text2: "Passionate about technology and always looking for opportunities to continue growing professionally. My goal is to prepare myself to face the challenges of the professional world while continuing to perfect my technical skills.",
        text3: "With a B2 level of English acquired at Aticana, I'm deeply interested in video game development, exploring technologies like Unity and Godot in my free time.",
        features: {
          webdev: {
            title: "Full-Stack Web Development",
            description: "Development of modern and scalable web applications."
          },
          design: {
            title: "UI/UX Design",
            description: "Design of elegant and functional user interfaces using Tailwind CSS."
          },
          optimization: {
            title: "Optimization",
            description: "Performance optimization of both static and dynamic web applications."
          },
          desktop: {
            title: "Desktop Apps",
            description: "Creation of robust and efficient cross-platform desktop applications."
          }
        }
      },
      tech: {
        title: "Technologies",
        cat1: "Languages",
        cat2: "Databases",
        cat3: "Frameworks and Libraries",
        cat4: "Tools"
      },
      projects: {
        title: "Projects",
        button1: "Code",
        button2: "Demo",
        projects: {
          pueble: {
            title: "HR Web Application - Pueble SA",
            description: "Developed for Pueble SA, with the aim of optimizing human resources management within the company. It provides tools to manage employees, roles, and permissions, as well as facilitating the tracking of work activities and employee payroll."
          },
          portfolio: {
            title: "Portfolio Version #1 - Pietro Bonacossa",
            description: "This is my first Portfolio made in Astro, using Tailwind. I uploaded it as a template available in Astro so that any programmer can create their own Portfolio by making small changes for customization. Template available on <a href='https://astro.build/themes/details/portfolio-apto-para-todo-pblico-portfolio-suitable-for-all-audiences/' target='_blank' class='text-blue-600'>Astro</a>."
          },
          wordle: {
            title: "Wordle by P",
            description: "With the aim of practicing typescript and web programming, I created a Wordle or Guess the Word game since I really enjoy playing this game."
          }
        }
      },
      certs: {
        title: "Certificates",
        button: "Click to see more",
        emitido: "Issued by"
      },
      contact: {
        title: "Contact Me",
        form: {
          title: "Contact",
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Your message...",
          sendButton: "Send Message",
          sending: "Sending...",
          success: {
            title: "Message sent!",
            description: "Thank you for contacting me. I will respond as soon as possible."
          },
          error: {
            title: "Error",
            description: "Could not send message. Please try again."
          }
        },
        info: {
          location: {
            title: "Location",
            content: "San Miguel de Tucumán, Tucumán, Argentina"
          },
          email: {
            title: "Email",
            content: "jpbonacossa@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+54) 3816618632"
          }
        }
      }
    }
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;