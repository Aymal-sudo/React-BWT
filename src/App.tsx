import './App.css'
import FAQ from './components/faq/FAQ'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Features from './components/features/Features'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Newsletter />
      <Footer />

    </>
  )
}

export default App
