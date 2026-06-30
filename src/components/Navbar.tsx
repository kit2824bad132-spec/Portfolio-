import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
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
      : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-red-100'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-rose-500 flex items-center justify-center shadow-md shadow-red-500/20">
            <Code2 size={15} className="text-white" />
          </div>
          <span className={`font-bold text-sm tracking-wide transition-colors ${
            isDark ? 'text-slate-100 group-hover:text-red-400' : 'text-gray-900 group-hover:text-red-600'
          }`}>
            Sabarivasan S
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  active === l.href
                    ? 'text-red-500'
                    : isDark
                    ? 'text-slate-400 hover:text-slate-100'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
              isDark
                ? 'text-slate-400 hover:text-yellow-400 hover:bg-white/5'
                : 'text-gray-500 hover:text-yellow-500 hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Resume */}
          <a
            href="https://drive.google.com/uc?export=download&id=1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              isDark
                ? 'border-red-800 text-red-400 hover:bg-red-950/40'
                : 'border-red-300 text-red-600 hover:bg-red-50'
            }`}
          >
            <Download size={14} />
            Resume
          </a>


        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
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
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-b ${
          isDark ? 'bg-[#12121a]/98 border-white/5' : 'bg-white/98 border-red-100'
        } backdrop-blur-md shadow-md`}>
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t flex gap-2 flex-wrap" style={{ borderColor: isDark ? '#1e1e2e' : '#fee2e2' }}>
              <a
                href="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/view?usp=drivesdk"
                target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium ${
                  isDark ? 'border-red-800 text-red-400' : 'border-red-300 text-red-600'
                }`}
              >
                View Resume
              </a>

            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
