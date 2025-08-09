import { Code2, ShieldCheck, Zap, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Cutting-Edge Tech",
      description:
        "We use the latest frameworks and tools to ensure your software is fast, secure, and future-proof.",
      icon: Code2,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Security is built into every layer, keeping your business and customer data safe at all times.",
      icon: ShieldCheck,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Lightning Performance",
      description:
        "Optimized for speed with top-notch infrastructure, so your users never experience lag.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Collaborative Approach",
      description:
        "We work closely with you at every stage, ensuring the final product meets your exact needs.",
      icon: Users,
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="bg-gray-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to build, scale, and succeed — all in one place.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
