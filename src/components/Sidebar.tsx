'use client'

import React, { useState } from 'react'
import { Home, User, FileText, Book, Server, Mail } from 'lucide-react'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  const navItems = [
    { name: 'Inicio', icon: Home, id: 'home' },
    { name: 'Sobre mí', icon: User, id: 'about' },
    { name: 'Tecnologías', icon: Server, id: 'tech' },
    { name: 'Proyectos', icon: FileText, id: 'projects' },
    { name: 'Certificados', icon: Book, id: 'certs' },
    { name: 'Contacto', icon: Mail, id: 'contact' }
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-white/90 backdrop-blur-md border-r shadow-lg flex flex-col items-center py-8 z-50">
      <div className="flex flex-col items-center gap-8 w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative w-full px-3 py-4 flex flex-col items-center justify-center gap-2
              transition-all duration-300 ease-in-out
              hover:bg-blue-50 group
              ${activeSection === item.id 
                ? 'text-blue-600 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-1 after:bg-blue-600 after:rounded-l-md' 
                : 'text-gray-500 hover:text-blue-600'
              }
            `}
          >
            <item.icon className={`
              w-6 h-6 transition-transform duration-300
              group-hover:scale-110
              ${activeSection === item.id ? 'scale-110' : ''}
            `} />
            
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-24 bg-gray-800 text-white px-3 py-2 rounded-md whitespace-nowrap shadow-lg before:absolute before:left-[-0.5rem] before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-gray-800">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar