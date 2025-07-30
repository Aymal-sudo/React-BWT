const Navbar = () => {
    return <header className="sticky top-0 z-50 bg-slate-900 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-white">My site</h1>
      <nav>
        <ul className="flex space-x-6 text-sm text-slate-300">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
}

export default Navbar