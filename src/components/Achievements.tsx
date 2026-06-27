import { Trophy, Code, Zap, Target } from 'lucide-react';

const hackathons = [
  {
    name: 'Cliqtrix Hackathon',
    organizer: 'Zoho',
    type: '24-Hour Hackathon',
    description:
      'Collaborated with a team to develop and present a functional software solution within tight time constraints organized by Zoho.',
    icon: Zap,
    color: 'red',
  },
  {
    name: 'GDG Hackathon',
    organizer: 'Google Developer Group',
    type: '24-Hour Offline Hackathon',
    description:
      'Focused on innovative software development and teamwork in an offline hackathon organized by the Google Developer Group.',
    icon: Trophy,
    color: 'rose',
  },
];

const platforms = [
  {
    name: 'LeetCode',
    handle: '@sabari_26',
    url: 'https://leetcode.com/u/sabari_26/',
    focus: 'Arrays, Trees, DP, Graphs',
    icon: Code,
    color: 'red',
  },
  {
    name: 'CodeChef',
    handle: '@sabarivasan25',
    url: 'https://www.codechef.com/users/sabarivasan25',
    focus: 'Competitive Contests',
    icon: Target,
    color: 'rose',
  },
  {
    name: 'Codeforces',
    handle: '@sabari25',
    url: 'https://codeforces.com/profile/sabari25',
    focus: 'Algorithmic Challenges',
    icon: Zap,
    color: 'red',
  },
];

const colorMap: Record<string, { card: string; icon: string; tag: string; accent: string }> = {
  red: {
    card: 'hover:border-red-300',
    icon: 'text-red-600 bg-red-50 border-red-200',
    tag: 'bg-red-50 text-red-700 border-red-200',
    accent: 'text-red-600',
  },
  rose: {
    card: 'hover:border-rose-300',
    icon: 'text-rose-600 bg-rose-50 border-rose-200',
    tag: 'bg-rose-50 text-rose-700 border-rose-200',
    accent: 'text-rose-600',
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-red-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hackathons & Competitive Programming</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Real-world problem solving under pressure — in hackathons and on competitive programming platforms.
          </p>
        </div>

        {/* Hackathons */}
        <div className="mb-14">
          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
            <Trophy size={18} className="text-red-600" />
            Hackathons
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {hackathons.map((h) => {
              const c = colorMap[h.color];
              const Icon = h.icon;
              return (
                <div
                  key={h.name}
                  className={`bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md ${c.card}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="text-gray-900 font-bold text-base">{h.name}</h4>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs border ${c.tag}`}>{h.type}</span>
                      </div>
                      <p className={`text-sm font-medium mb-3 ${c.accent}`}>
                        Organized by {h.organizer}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitive Programming */}
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
            <Code size={18} className="text-rose-600" />
            Competitive Programming
          </h3>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {platforms.map((p) => {
              const c = colorMap[p.color];
              const Icon = p.icon;
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-white border border-gray-100 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${c.card}`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${c.icon}`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">{p.name}</h4>
                  <p className="text-gray-400 text-xs font-mono mb-3">{p.handle}</p>
                  <p className="text-gray-500 text-xs">{p.focus}</p>
                </a>
              );
            })}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              Active competitive programmer who regularly solves problems involving{' '}
              <span className="text-red-600 font-medium">arrays, linked lists, trees, graphs,</span>{' '}
              <span className="text-rose-600 font-medium">dynamic programming,</span> and greedy techniques.
              Maintains profiles across multiple platforms and consistently participates in coding contests
              to sharpen algorithmic thinking and problem-solving speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
