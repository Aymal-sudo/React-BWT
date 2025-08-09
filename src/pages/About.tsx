import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
        <Navbar/>
 <div className="bg-gray-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-transparent blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About SoftWave
            </h1>
            <p className="mt-6 max-w-md text-gray-300">
              We build innovative software solutions that empower businesses to
              scale efficiently and securely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 lg:mt-0 max-w-md rounded-3xl overflow-hidden shadow-xl border border-gray-800 mx-auto lg:mx-0"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="About SoftWave"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-gray-300 space-y-8">
        <p className="leading-relaxed">
          At SoftWave, we are passionate about building innovative software
          solutions that empower businesses to scale efficiently and securely.
        </p>
        <p className="leading-relaxed">
          With a focus on cutting-edge technology and a user-first mindset, we
          deliver products that not only solve problems but also delight users.
        </p>
        <p className="leading-relaxed">
          Our team of expert developers, designers, and strategists work
          collaboratively to bring your vision to life with precision and speed.
        </p>
      </section>
    </div>
        
        <Footer/>
        </>
    )
}

export default About