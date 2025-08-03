import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);

    return <header className="  sticky top-0 z-50 bg-slate-900 px-6 py-4 flex justify-between shadow-md ">

      <button onClick={toggleMenu} className=" md:hidden outline-none"><img src="../../../public/icons/hamburger.svg" alt="" /></button>

      <h1 className="text-xl font-bold text-white">My site</h1>
      <nav>
        <ul className=" hidden md:flex md:space-x-6 md:text-sm text-slate-300">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
        </nav>

      {isOpen && (
        <div className='md:hidden absolute  w-2x3 left-0 right-0 top-15 text-center pb-4 min-h-full  bg-slate-600  transition duration-1000 ease-in-out'>
        <ul className="  text-white mt-4 flex flex-col gap-4 px-2 ">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
        </div>
      )
    }
 
    </header>
}

export default Navbar