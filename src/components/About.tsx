import { User, GraduationCap, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Certifications', value: '8+' },
  { label: 'Hackathons', value: '2' },
  { label: 'GPA', value: '7.0' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 px-6 ${isDark ? 'bg-[#0d0d14]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Square Image with dotted corners */}
          <div className="relative reveal px-8 py-8 w-full max-w-sm mx-auto md:max-w-none">
            {/* Dotted pattern - top right */}
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-tl-xl rounded-br-xl ${isDark ? 'bg-blue-900/40' : 'bg-blue-100'}`} style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)', backgroundSize: '12px 12px', color: isDark ? '#3b82f6' : '#2563eb' }} />
            
            {/* Dotted pattern - bottom left */}
            <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-tr-xl rounded-bl-xl ${isDark ? 'bg-blue-900/40' : 'bg-blue-100'}`} style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)', backgroundSize: '12px 12px', color: isDark ? '#3b82f6' : '#2563eb' }} />
            
            <div className="relative z-10 w-full aspect-square overflow-hidden shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Sabarivasan S"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="reveal">
            {/* ABOUT ME badge */}
            <div className={`inline-block px-4 py-1.5 rounded mb-4 text-xs font-bold tracking-wider text-white ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}>
              ABOUT ME
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why hire me for your next project?
            </h2>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              <p>
                I'm a motivated B.Tech student specializing in{' '}
                <span className="text-blue-500 font-medium">Artificial Intelligence & Data Science</span>{' '}
                at Kalaignar Karunanidhi Institute of Technology, Coimbatore.
              </p>
              <p>
                With hands-on experience building full-stack web applications and AI-powered
                systems, I love turning complex problems into elegant, scalable solutions.
                My tech stack spans from React frontends to FastAPI microservices and
                PyTorch-based deep learning models.
              </p>
              <p>
                Beyond coding, I'm an active competitive programmer on LeetCode, CodeChef, and
                Codeforces — constantly sharpening my problem-solving skills with DSA challenges.
              </p>
            </div>

            <div className="mt-8 space-y-3 mb-10">
              {[
                { icon: GraduationCap, text: 'B.Tech AI & Data Science — KIT, Coimbatore' },
                { icon: Zap, text: 'Full-Stack & AI/ML Development' },
                { icon: User, text: 'Competitive Programmer & Hackathon Participant' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded border flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-blue-950/40 border-blue-800/50' : 'bg-blue-50 border-blue-100'
                  }`}>
                    <Icon size={15} className="text-blue-500" />
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/view?usp=drivesdk"
              target="_blank" rel="noopener noreferrer"
              className={`inline-block px-8 py-3 rounded text-sm font-bold tracking-wider text-white transition-all shadow-md ${
                isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
              }`}
            >
              DOWNLOAD CV
            </a>
          </div>

        </div>

        {/* Stats Grid at the bottom */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`border rounded p-4 text-center transition-all hover:scale-105 shadow-sm ${
                isDark
                  ? 'bg-[#16161f] border-[#1e1e2e] hover:border-blue-900'
                  : 'bg-white border-gray-100 hover:border-blue-200'
              }`}
            >
              <p className="text-blue-600 font-bold text-2xl">{s.value}</p>
              <p className={`text-xs mt-1 font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
