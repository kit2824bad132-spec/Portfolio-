import { User, GraduationCap, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Certifications', value: '8+' },
  { label: 'Hackathons', value: '2' },
  { label: 'GPA', value: '7.0' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="relative">
            <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-dashed border-red-200 animate-spin-slow" />
              <div
                className="absolute -inset-4 rounded-full border border-dashed border-rose-100"
                style={{ animation: 'spin-slow 30s linear infinite reverse' }}
              />
              <div className="absolute inset-4 rounded-full border border-red-100 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="SabariVasan S"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>

            <div className="mt-10 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-red-50 border border-red-100 rounded-xl p-3 text-center hover:border-red-300 transition-colors"
                >
                  <p className="text-red-600 font-bold text-xl">{s.value}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 section-heading">
              Who I Am
            </h2>
            <div className="mt-8 space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                I'm a motivated B.Tech student specializing in{' '}
                <span className="text-red-600 font-medium">Artificial Intelligence & Data Science</span>{' '}
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

            <div className="mt-8 space-y-3">
              {[
                { icon: GraduationCap, text: 'B.Tech AI & Data Science — KIT, Coimbatore' },
                { icon: Zap, text: 'Full-Stack & AI/ML Development' },
                { icon: User, text: 'Competitive Programmer & Hackathon Participant' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-red-500" />
                  </div>
                  <span className="text-gray-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
