const Hero = () => {
    return     <section className="flex flex-col items-center text-center py-24 px-4 bg-gradient-to-b from-slate-700 to-slate-800">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Welcome to my site</h1>
      <p className="text-slate-400 max-w-xl mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim molestiae ad, minima pariatur vero excepturi, qui suscipit molestias doloremque, fuga modi commodi. Error ducimus et dolorum facere fuga enim culpa.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow cursor-pointer">Get Started</button>
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold cursor-pointer">Speak to Sales</button>
      </div>
    </section>

}

export default Hero