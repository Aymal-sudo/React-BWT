import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups.",
    features: [
      "Up to 5 users",
      "Basic analytics",
      "Email support",
      "1 GB storage",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing businesses needing more power.",
    features: [
      "Up to 50 users",
      "Advanced analytics",
      "Priority email support",
      "10 GB storage",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Custom solutions for large organizations.",
    features: [
      "Unlimited users",
      "Dedicated account manager",
      "24/7 support",
      "Unlimited storage",
    ],
  },
];

export default function Pricing() {
  return (<>
    <Navbar />
    <div className="bg-gray-950 min-h-screen text-white ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-transparent blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent h-17 "
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
          >
            Choose a plan that fits your business needs. No surprises, just
            powerful software.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map(({ name, price, description, features, popular }) => (
            <div
              key={name}
              className={`relative rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-lg transition-transform duration-300 hover:scale-105 ${
                popular
                  ? "border-blue-500 bg-gradient-to-tr from-blue-900 to-purple-900 shadow-blue-500/50"
                  : ""
              }`}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{name}</h3>
              <p className="text-blue-400 text-4xl font-extrabold mb-6">
                {price}
                {price !== "Contact Us" && (
                  <span className="text-base font-normal text-gray-400">/mo</span>
                )}
              </p>
              <p className="text-gray-400 mb-6">{description}</p>
              <ul className="mb-8 space-y-3 text-gray-300">
                {features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-blue-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-xl py-3 font-semibold shadow-lg transition-all duration-300 ${
                  popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 hover:shadow-purple-500/40"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {popular ? "Get Started" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
