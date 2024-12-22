// app/page.tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Tech from '@/components/sections/Tech'
import Projects from '@/components/sections/Projects'
import Certs from '@/components/sections/Certs'
import Contact from '@/components/sections/Contact'
export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <About />
      <Tech />
      <Projects/>
      <Certs />
      <Contact />
    </div>
  )
}