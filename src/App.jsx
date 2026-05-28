import { motion, useScroll, useSpring } from 'framer-motion'
import Backdrop from './components/Backdrop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-300 to-signal"
    />
  )
}

// Subtle divider between major sections
function Divider() {
  return (
    <div className="section">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Backdrop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Divider />
        <CaseStudies />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
