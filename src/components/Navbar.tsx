import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center py-4">
        <Link to="/" className="font-extrabold tracking-[0.2em] text-xl md:text-2xl text-on-surface uppercase">
          POINT COFFEE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-body-md uppercase tracking-widest transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface font-light opacity-80 hover:opacity-100 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/signin" className="text-body-md uppercase tracking-widest font-light opacity-80 hover:opacity-100 hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-primary-container text-[#050505] font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm hover:bg-primary transition-all scale-95 active:scale-90"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 py-8 flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg uppercase tracking-widest text-on-surface"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full px-10 pt-4 border-t border-white/10">
              <Link to="/signin" className="text-center text-on-surface uppercase tracking-widest" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link to="/signup" className="text-center bg-primary-container text-[#050505] font-bold py-3 rounded-full uppercase tracking-widest" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
