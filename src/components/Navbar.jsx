import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClass = (section) =>
    `nav-link cursor-pointer text-sm font-medium ${
      activeSection === section
        ? 'active text-accent-primary'
        : isDark
          ? 'text-text-secondary-dark hover:text-text-primary-dark'
          : 'text-text-secondary-light hover:text-text-primary-light'
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? isDark
              ? 'glass border-b border-accent-primary/15 shadow-glow'
              : 'glass-light border-b border-accent-primary/15 shadow-glow'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between">
          <Link
            to="hero"
            smooth
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer font-display text-2xl font-bold gradient-text"
          >
            TM
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                spy
                onSetActive={setActiveSection}
                className={linkClass(link.to)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`rounded-lg p-2 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'text-text-primary-dark hover:bg-accent-primary/20'
                  : 'text-text-primary-light hover:bg-accent-primary/10'
              }`}
            >
              {isDark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`relative z-[80] rounded-lg p-2 md:hidden ${
                isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
              }`}
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed inset-y-0 right-0 z-[70] w-64 border-l p-6 pt-20 md:hidden ${
                isDark
                  ? 'border-accent-primary/15 bg-surface-dark'
                  : 'border-accent-primary/15 bg-white'
              }`}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-70}
                    spy
                    onSetActive={setActiveSection}
                    onClick={closeMenu}
                    className={linkClass(link.to)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
