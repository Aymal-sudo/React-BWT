import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }
    setError(null);
    setSuccess(true);
    setEmail("");
    // Here you’d normally integrate with your email API
  };

  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
          Stay Updated with Our Newsletter
        </h2>
        <p className="mb-8 text-gray-400">
          Get the latest software updates, tips, and exclusive offers delivered
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4"
          noValidate
        >
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            required
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-purple-500/40 transition-transform"
          >
            Subscribe
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && (
          <p className="mt-4 text-green-400">
            Thanks for subscribing! Check your inbox.
          </p>
        )}
      </div>
    </section>
  );
}
