import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Building the Future of Software
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We craft scalable, lightning-fast, and user-focused software
            solutions to power your business into the next era.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-xl border border-gray-700 bg-gray-900 px-6 py-3 text-lg font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Decorative Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
              alt="Product Preview"
              className="relative rounded-3xl border border-gray-800 shadow-xl w-150"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
