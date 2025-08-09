import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What kind of software do you build?",
    answer:
      "We specialize in scalable SaaS platforms, custom web applications, and enterprise solutions tailored to your business needs.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "Security is our top priority. We implement encryption, regular audits, and best practices at every development stage to protect your data.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. Our pricing plans are flexible and designed to scale with your growth. You can upgrade or customize anytime.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer dedicated support and maintenance packages to ensure your software runs smoothly after deployment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-950 text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-700 rounded-lg bg-gray-900/50"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left h-1  focus:outline-none"
                onClick={() => toggleIndex(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
                id={`faq-header-${idx}`}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${idx}`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
                className={`px-6 pb-6 text-gray-300 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
