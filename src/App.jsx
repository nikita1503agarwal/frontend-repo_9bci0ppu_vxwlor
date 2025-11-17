import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Integrations from './components/Integrations'
import Performance from './components/Performance'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div className="bg-[#05060A] min-h-screen text-white">
      <Hero />
      <ValueProps />
      <Integrations />
      <Performance />
      <Showcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
