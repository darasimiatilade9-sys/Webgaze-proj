import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import TestimonialsFaq from './components/TestimonialsFaq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Projects />
      <Process />
      <TestimonialsFaq />
      <Cta />
      <Footer />
       </div>
  )
}

export default App
