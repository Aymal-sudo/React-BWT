import Features from "../components/features/Features"
import FAQ from "../components/faq/FAQ"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import Newsletter from "../components/newsletter/Newsletter"

const Home = () => {
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
export default Home