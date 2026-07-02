import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap: Record<string, React.ElementType> = {
  Code2, Layout, Server, Database, Wrench
};

export default function Skills() {
  const { theme } = useTheme();
  const { skillGroups } = usePortfolio();
  const isDark = theme === 'dark';

  const cardBase = isDark
    ? 'bg-[#16161f] border-[#1e1e2e] hover:border-orange-900'
    : 'bg-white border-gray-100 hover:border-orange-200 hover:shadow-orange-50';

  const getAccent = (accent: string, isDark: boolean) => {
    if (accent === 'red') {
      return {
        icon: isDark ? 'text-orange-400 bg-orange-950/50 border-orange-800/50' : 'text-orange-600 bg-orange-50 border-orange-200',
        badge: isDark ? 'bg-orange-950/40 text-orange-400 border-orange-800/40' : 'bg-orange-50 text-orange-700 border-orange-200',
      };
    }
    return {
      icon: isDark ? 'text-orange-400 bg-orange-950/50 border-orange-800/50' : 'text-orange-600 bg-orange-50 border-orange-200',
      badge: isDark ? 'bg-orange-950/40 text-orange-400 border-orange-800/40' : 'bg-orange-50 text-orange-700 border-orange-200',
    };
  };

  return (
    <section id="skills" className={`py-24 px-6 ${isDark ? 'bg-[#0d0d14]' : 'bg-orange-50/40'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What I Work With
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            A curated set of technologies I've used to build real-world applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const { iconName, category: label, skills, accent } = group;
            const Icon = iconMap[iconName] || Code2;
            const colors = getAccent(accent, isDark);
            return (
              <div
                key={label}
                className={`reveal border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${cardBase}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className={`font-semibold text-sm ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
