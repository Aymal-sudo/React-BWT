const features = [
  { title: 'Marketing', desc: 'Plan and create campaigns that grow your business.' },
  { title: 'Legal', desc: 'Streamline contracts and compliance workflows.' },
  { title: 'Business Automation', desc: 'Automate time-consuming processes efficiently.' },
  { title: 'Finance', desc: 'Manage monthly and quarterly budgets in one place.' },
  { title: 'Enterprise Design', desc: 'Empower teams with brand-consistent designs.' },
  { title: 'Operations', desc: 'Optimize processes and scale efficiently.' }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-700 rounded-xl p-6 shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-blue-100 mb-2">{f.title}</h3>
            <p className="text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}