import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Eye, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const roles = [
  'Full Stack Developer',
  'React & Node.js Engineer',
  'AI & Data Science Student',
  'ML Engineer',
  'Competitive Programmer',
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className={`relative min-h-screen pt-20 overflow-hidden ${
      isDark ? 'bg-[#0a0a0f]' : 'bg-white'
    }`}>
      {/* Background split shape */}
      <div className={`absolute top-0 left-0 w-[45%] h-full hidden lg:block rounded-br-[200px] ${
        isDark ? 'bg-blue-900/40' : 'bg-blue-600'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left side: Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10 relative">
          {/* Circular image wrapper */}
          <div className={`relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full border-[12px] shadow-2xl flex-shrink-0 overflow-hidden ${
            isDark ? 'border-[#0a0a0f]' : 'border-white'
          }`}>
            <img 
              src="/profile.jpg" 
              alt="Sabarivasan S" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sabarivasan S
          </h1>

          <div className="h-8 mb-6">
            <p className={`text-lg sm:text-xl font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>{displayed}</span>
              <span className="cursor-blink text-blue-400 ml-0.5">|</span>
            </p>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 ${
            isDark ? 'text-slate-400' : 'text-gray-500'
          }`}>
            B.Tech student in AI & Data Science building full-stack web apps and
            AI-powered systems with React, Node.js, FastAPI, and PyTorch.
            Passionate about turning ideas into production-ready solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#contact"
              className={`px-8 py-3 rounded text-sm font-bold tracking-wider text-white transition-all shadow-lg ${
                isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
              }`}
            >
              HIRE ME!
            </a>
            <a
              href="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded border text-sm font-bold tracking-wider transition-all ${
                isDark
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-950/30'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              RESUME
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            {[
              { icon: Github, href: 'https://github.com/kit2824bad132-spec', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sabarivasan-s-32484333a', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kit28.24bad132@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded border flex items-center justify-center transition-all ${
                  isDark
                    ? 'border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500'
                    : 'border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
