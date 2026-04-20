import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div
        className="orb"
        style={{ width: 520, height: 520, background: 'rgba(124,58,237,0.12)', top: -120, left: -120 }}
      />
      <div
        className="orb"
        style={{ width: 420, height: 420, background: 'rgba(6,182,212,0.09)', bottom: -60, right: -60, animationDelay: '-4s' }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
