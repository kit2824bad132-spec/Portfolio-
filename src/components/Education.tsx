import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'Kalaignar Karunanidhi Institute of Technology',
    location: 'Coimbatore',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    period: 'Sep 2024 — Present',
    detail: 'GPA: 7.00 / 10',
    icon: GraduationCap,
    current: true,
  },
  {
    institution: 'New Power Matric Higher Secondary School',
    location: 'Coimbatore',
    degree: 'Higher Secondary Education (HSE)',
    period: '2024',
    detail: 'Class XII',
    icon: BookOpen,
    current: false,
  },
  {
    institution: 'New Power Matric Higher Secondary School',
    location: 'Coimbatore',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2022',
    detail: 'Class X',
    icon: BookOpen,
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-blue-50/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Academic Journey</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-blue-300/30 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = edu.icon;
              return (
                <div key={i} className="relative pl-16">
                  <div className={`absolute left-0 w-12 h-12 rounded-xl border flex items-center justify-center ${
                    edu.current
                      ? 'bg-blue-50 border-blue-300 animate-pulse-glow'
                      : 'bg-white border-gray-200'
                  }`}>
                    <Icon size={20} className={edu.current ? 'text-blue-600' : 'text-gray-400'} />
                  </div>

                  <div className={`bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-md ${
                    edu.current ? 'border-blue-200 hover:border-blue-300' : 'border-gray-100 hover:border-gray-200'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-gray-900 font-bold text-base">{edu.institution}</h3>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Calendar size={12} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm font-medium mb-2">{edu.degree}</p>

                    <div className="flex items-center gap-3">
                      {edu.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="text-gray-400 text-xs">{edu.detail}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
