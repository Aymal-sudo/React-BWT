import { NavLink } from "react-router";

export default function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Branding */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          SoftWave
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClasses} end>
              {item.name}
            </NavLink>
          ))}
        </nav>

    
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} SoftWave. All rights reserved.
      </div>
    </footer>
  );
}
