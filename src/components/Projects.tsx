import { ExternalLink, Github, Cpu, Users, ShoppingBag, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Users, ShoppingBag, Code2
};


export default function Projects() {
  const { theme } = useTheme();
  const { projects } = usePortfolio();
  const isDark = theme === 'dark';

  const card = isDark ? 'bg-[#16161f] border-[#1e1e2e]' : 'bg-white border-gray-100';

  const getColors = (accent: string) => {
    if (accent === 'red') return {
      tag: isDark ? 'bg-blue-950/40 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200',
      btn: isDark ? 'bg-blue-950/40 border-blue-800/40 text-blue-400 hover:bg-blue-950/60' : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
      dot: isDark ? 'bg-blue-500' : 'bg-blue-500',
      iconBg: isDark ? 'text-blue-400' : 'text-blue-600',
      overlay: 'from-blue-500/30 to-transparent',
    };
    return {
      tag: isDark ? 'bg-blue-950/40 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200',
      btn: isDark ? 'bg-blue-950/40 border-blue-800/40 text-blue-400 hover:bg-blue-950/60' : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
      dot: isDark ? 'bg-blue-500' : 'bg-blue-500',
      iconBg: isDark ? 'text-blue-400' : 'text-blue-600',
      overlay: 'from-blue-500/30 to-transparent',
    };
  };

  return (
    <section id="projects" className={`py-24 px-6 ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Work
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            Real-world applications built end-to-end — from database design to deployed UI.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => {
            const c = getColors(p.accent);
            const Icon = iconMap[p.iconName] || Code2;
            return (
              <div
                key={p.title}
                className={`reveal project-card border rounded-2xl overflow-hidden ${card} ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:flex`}
              >
                {/* Image */}
                <div className="md:w-2/5 h-52 md:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${c.overlay}`} />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                    isDark ? 'bg-[#0a0a0f]/80 backdrop-blur border border-white/10' : 'bg-white/90 backdrop-blur border border-gray-100'
                  }`}>
                    <Icon size={20} className={c.iconBg} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((t) => (
                      <span key={t} className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${c.tag}`}>{t}</span>
                    ))}
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{p.subtitle}</p>
                  <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{p.description}</p>

                  <ul className="space-y-2 mb-6">
                    {p.points.map((pt) => (
                      <li key={pt} className={`flex items-start gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        isDark
                          ? 'border-white/10 text-slate-400 hover:text-slate-100 hover:border-white/20'
                          : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <Github size={15} /> Source
                    </a>
                    <a
                      href={p.demoUrl || '#'}
                      target={p.demoUrl ? '_blank' : undefined}
                      rel={p.demoUrl ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${c.btn}`}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
