import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PORTFOLIO', href: '#projects' },
  { label: 'SERVICES', href: '#certifications' },
  { label: 'CONTACT US', href: '#contact' },
];

interface NavbarProps {
  onAdminClick: () => void;
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navBg = scrolled
    ? isDark
      ? 'bg-[#0a0a0f]/90 backdrop-blur-md shadow-sm border-b border-white/5'
      : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center font-bold text-xl tracking-wide group">
          <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} mr-1`}>PORT</span>
          <span className={`px-3 py-1 rounded-full text-white text-sm ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}>FOLIO</span>
        </a>

        {/* Desktop links - Centered */}
        <ul className="hidden md:flex items-center gap-6 xl:gap-8 mx-auto">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link text-xs font-bold tracking-wider transition-colors ${
                  active === l.href
                    ? 'text-white bg-blue-600 px-3 py-1.5 rounded-md'
                    : isDark
                    ? 'text-slate-400 hover:text-blue-400'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isDark
                ? 'text-slate-400 hover:text-yellow-400 hover:bg-white/5'
                : 'text-gray-500 hover:text-yellow-500 hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className={`flex items-center justify-center px-6 py-2.5 rounded text-sm font-bold tracking-wider text-white transition-all shadow-md ${
              isDark
                ? 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/20'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
            }`}
          >
            HIRE ME!
          </a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              isDark ? 'text-slate-400 hover:text-yellow-400' : 'text-gray-500 hover:text-yellow-500'
            }`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className={isDark ? 'text-slate-400' : 'text-gray-500'}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-b ${
          isDark ? 'bg-[#12121a]/98 border-white/5' : 'bg-white/98 border-gray-100'
        } backdrop-blur-md shadow-md`}>
          <ul className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-xs font-bold tracking-wider transition-colors ${
                    isDark ? 'text-slate-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t mt-2" style={{ borderColor: isDark ? '#1e1e2e' : '#f3f4f6' }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-center w-full px-6 py-3 rounded text-sm font-bold tracking-wider text-white transition-all shadow-md ${
                  isDark ? 'bg-blue-500' : 'bg-blue-600'
                }`}
              >
                HIRE ME!
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
