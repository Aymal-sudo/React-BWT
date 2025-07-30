export default function Newsletter() {
  return (
    <section className="py-20 px-6 text-center bg-slate-800">
      <h2 className="text-3xl font-bold mb-4 text-white">Sign up for our newsletter</h2>
      <p className="text-slate-400 mb-6">Stay up to date with roadmap updates, announcements and more.</p>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 cursor-pointer">Subscribe</button>
      </form>
    </section>
  );
}
