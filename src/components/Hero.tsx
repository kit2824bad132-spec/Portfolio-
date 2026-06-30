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
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden grid-bg ${
      isDark ? 'bg-[#0a0a0f]' : 'bg-white'
    }`}>
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-red-500/8 blur-[130px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/6 blur-[100px]" />
        {isDark && <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-red-800/20 blur-[80px]" />}
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-red-400/50 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-48 w-2 h-2 rounded-full bg-rose-400/40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-24 w-2 h-2 rounded-full bg-red-300/50 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-48 left-48 w-3 h-3 rounded-full bg-rose-400/30 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <div className="w-full">


          <h1 className={`text-5xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sabarivasan{' '}
            <span className="gradient-text">S</span>
          </h1>

          <div className="h-10 mb-6">
            <p className={`text-xl sm:text-2xl font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              <span className="text-red-500">{displayed}</span>
              <span className="cursor-blink text-red-400 ml-0.5">|</span>
            </p>
          </div>

          <p className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10 ${
            isDark ? 'text-slate-400' : 'text-gray-500'
          }`}>
            B.Tech student in AI & Data Science building full-stack web apps and
            AI-powered systems with React, Node.js, FastAPI, and PyTorch.
            Passionate about turning ideas into production-ready solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/30"
            >
              <Briefcase size={16} />
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-7 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                isDark
                  ? 'border-white/10 text-slate-300 hover:border-red-700 hover:text-red-400 hover:bg-red-950/20'
                  : 'border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Eye size={16} />
              View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
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
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                  isDark
                    ? 'border-white/10 text-slate-400 hover:text-red-400 hover:border-red-800 hover:bg-red-950/30'
                    : 'border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors ${
          isDark ? 'text-slate-600 hover:text-red-400' : 'text-gray-400 hover:text-red-600'
        }`}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
