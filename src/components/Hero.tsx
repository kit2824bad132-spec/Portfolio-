import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const roles = [
  'AI & Data Science Student',
  'Full-Stack Developer',
  'React Enthusiast',
  'Competitive Programmer',
  'ML Engineer',
];

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg bg-white">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-red-500/6 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/5 blur-[100px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-red-400/50 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-48 w-2 h-2 rounded-full bg-rose-400/40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-24 w-2 h-2 rounded-full bg-red-300/50 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-48 left-48 w-3 h-3 rounded-full bg-rose-400/30 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          SabariVasan{' '}
          <span className="gradient-text">S</span>
        </h1>

        <div className="h-10 mb-8">
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            <span className="text-red-600">{displayed}</span>
            <span className="cursor-blink text-red-500 ml-0.5">|</span>
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed mb-12">
          B.Tech student in AI & Data Science building full-stack web apps and AI-powered systems
          with React, Node.js, FastAPI, and PyTorch. Passionate about turning ideas into
          production-ready solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/25"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-red-300 hover:text-red-600 transition-all"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/kit2824bad132-spec', label: 'GitHub', external: true },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sabarivasan-s-32484333a', label: 'LinkedIn', external: true },
            { icon: Mail, href: 'mailto:kit28.24bad132@gmail.com?subject=Hello%20SabariVasan', label: 'Email', external: false },
            { icon: Phone, href: 'tel:+917540061497', label: 'Phone', external: false },
          ].map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-red-600 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
