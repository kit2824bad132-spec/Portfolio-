import { Award } from 'lucide-react';

const certs = [
  { title: 'Artificial Intelligence', issuer: 'Coursera', color: 'red' },
  { title: 'What is Data Science', issuer: 'Coursera', color: 'rose' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB University', color: 'red' },
  { title: 'HTML Fundamentals', issuer: 'Coursera', color: 'rose' },
  { title: 'Full Stack Java Development', issuer: 'Industry', color: 'red' },
  { title: 'Python Essentials 1', issuer: 'Cisco', color: 'rose' },
  { title: 'Python Essentials 2', issuer: 'Cisco', color: 'red' },
  { title: 'Certificate of Excellence', issuer: 'Academic', color: 'rose' },
];

const colorMap: Record<string, { card: string; icon: string; badge: string }> = {
  red: {
    card: 'hover:border-red-300 hover:shadow-red-50',
    icon: 'text-red-600 bg-red-50 border-red-200',
    badge: 'bg-red-50 text-red-700 border-red-200',
  },
  rose: {
    card: 'hover:border-rose-300 hover:shadow-rose-50',
    icon: 'text-rose-600 bg-rose-50 border-rose-200',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Credentials</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Continuous learning through structured courses and certification programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert) => {
            const c = colorMap[cert.color];
            return (
              <div
                key={cert.title}
                className={`group bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg cursor-default ${c.card}`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${c.icon}`}>
                  <Award size={18} />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2">
                  {cert.title}
                </h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs border ${c.badge}`}>
                  {cert.issuer}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
