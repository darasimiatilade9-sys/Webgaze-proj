import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import TestimonialsFaq from './components/TestimonialsFaq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <Services />
    <Projects />
    <Process />
    <TestimonialsFaq />
    <Cta />
  </>
)

const App = () => {
  const location = useLocation()

  /* Route changes: set the page title, and either scroll to the hash target
     (after the home page has rendered) or back to the top. */
  useEffect(() => {
    document.title =
      location.pathname === '/projects'
        ? 'Our Work — Webgaze'
        : 'Webgaze — Web Design & Digital Studio'

    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
