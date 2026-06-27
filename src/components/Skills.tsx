import { Code2, Layout, Server, Database, Cpu, Wrench } from 'lucide-react';

const skillGroups = [
  {
    icon: Code2,
    label: 'Languages',
    color: 'red',
    skills: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    icon: Layout,
    label: 'Frontend',
    color: 'rose',
    skills: ['HTML', 'CSS', 'ReactJS', 'Vite', 'Context API', 'Redux'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'red',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: 'rose',
    skills: ['MongoDB'],
  },
  {
    icon: Cpu,
    label: 'AI / ML',
    color: 'red',
    skills: ['PyTorch', 'Deep Learning', 'Image Classification', 'ResNet'],
  },
  {
    icon: Wrench,
    label: 'Tools & Concepts',
    color: 'rose',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'DSA', 'OOP'],
  },
];

const colorMap: Record<string, { card: string; badge: string; icon: string }> = {
  red: {
    card: 'hover:border-red-300 hover:shadow-red-100',
    badge: 'bg-red-50 text-red-700 border border-red-200',
    icon: 'text-red-600 bg-red-50 border-red-200',
  },
  rose: {
    card: 'hover:border-rose-300 hover:shadow-rose-100',
    badge: 'bg-rose-50 text-rose-700 border border-rose-200',
    icon: 'text-rose-600 bg-rose-50 border-rose-200',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-red-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What I Work With
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            A curated set of technologies I've used to build real-world applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            const Icon = group.icon;
            return (
              <div
                key={group.label}
                className={`bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${c.card}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge px-3 py-1 rounded-full text-xs font-medium ${c.badge}`}
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
