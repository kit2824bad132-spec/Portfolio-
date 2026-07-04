import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Eye, Briefcase, Code2, Terminal, Trophy, X, Download } from 'lucide-react';
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
  const [showResumeModal, setShowResumeModal] = useState(false);

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
      <div className={`absolute top-0 left-0 w-[45%] h-full hidden lg:block rounded-br-[200px] pointer-events-none ${
        isDark ? 'bg-orange-900/40' : 'bg-orange-600'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left side: Profile Image & Links */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-10 relative gap-8">
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

          <div className="flex flex-col items-center w-full max-w-[480px] gap-5">
            {/* Social links */}
            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 w-full relative z-20">
              {[
                { icon: Github, href: 'https://github.com/kit2824bad132-spec', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sabarivasan-s-32484333a', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kit28.24bad132@gmail.com', label: 'Email' },
                { icon: Code2, href: 'https://leetcode.com/u/Sabarivasan_s/', label: 'LeetCode' },
                { icon: Trophy, href: 'https://www.codechef.com/users/sabarivasan_s', label: 'CodeChef' },
                { icon: Terminal, href: 'https://codeforces.com/profile/Sabarivasan_s', label: 'Codeforces' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-1.5 px-2 py-2 transition-all cursor-pointer group ${
                    isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-gray-900 hover:text-black'
                  }`}
                >
                  <span className="w-10 h-10 flex items-center justify-center border-b-2 border-orange-500">
                    <Icon size={18} />
                  </span>
                  <span className={`text-[10px] font-bold tracking-wide ${
                    isDark ? 'text-slate-300 group-hover:text-orange-400' : 'text-white group-hover:text-gray-900'
                  }`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Problems Solved Column */}
            <div className={`w-full max-w-[320px] flex flex-col items-center gap-1.5 p-4 rounded-2xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-orange-500" />
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>500+ Problems Solved</span>
              </div>
              <div className={`text-xs text-center leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                Across LeetCode, CodeChef & Codeforces
              </div>
            </div>
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
              <span className={isDark ? 'text-orange-400' : 'text-orange-600'}>{displayed}</span>
              <span className="cursor-blink text-orange-400 ml-0.5">|</span>
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
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <button
              onClick={() => setShowResumeModal(true)}
              className={`px-8 py-3 rounded text-sm font-bold tracking-wider transition-all border-2 flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-orange-500 text-orange-400 hover:bg-orange-500/10' 
                  : 'border-orange-600 text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Eye size={18} />
              RESUME
            </button>
          </div>





        </div>

      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`relative w-full max-w-4xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden ${
            isDark ? 'bg-[#151521] border border-white/10' : 'bg-white border border-gray-200'
          }`}>
            {/* Modal Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Resume Preview
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all ${
                    isDark 
                      ? 'bg-orange-500/10 text-orange-400 hover:bg-orange-500/20' 
                      : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                  }`}
                  title="Download Resume"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className={`p-2 rounded-full transition-all ${
                    isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                  }`}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Modal Body (Iframe) */}
            <div className="flex-1 w-full bg-gray-100/50">
              <iframe 
                src="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/preview" 
                className="w-full h-full border-0"
                title="Resume Preview"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
