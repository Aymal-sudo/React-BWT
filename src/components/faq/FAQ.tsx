const faqs = [
  { q: 'What do you mean by "Figma assets"?', a: 'You will have access to the full Figma project with components and illustrations.' },
  { q: 'What does "lifetime access" mean?', a: 'You purchase once and receive all future updates for free.' },
  { q: 'How does support work?', a: 'We offer email support by qualified developers.' },
  { q: 'Can I build more than one project?', a: "Yes, it's allowed for both personal and commercial use." }
];

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <h2 className="text-center text-3xl font-bold mb-10 text-white">Frequently asked questions</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((f, i) => (
          <details key={i} className="bg-slate-700 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-blue-400">{f.q}</summary>
            <p className="mt-2 text-slate-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}