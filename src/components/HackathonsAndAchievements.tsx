import React from 'react';
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Zap,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { achievements } from '../data/portfolioData';

export const HackathonsAndAchievements: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#10B981', '#06B6D4', '#6366F1', '#F59E0B'],
    });
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'gold':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'silver':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <Medal className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>HACKATHONS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Honors, Awards & Competitions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proven track record in national hackathons, technical problem-solving, and AI system design.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={triggerConfetti}
              className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all hover:shadow-xl cursor-pointer group"
            >
              <div>
                {/* Header with Badge Icon & Year */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getBadgeIcon(ach.badgeType)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                        {ach.position}
                      </span>
                      <p className="text-xs text-slate-400">{ach.organization}</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {ach.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                  {ach.title}
                </h3>

                {/* Project / Domain info if available */}
                {ach.projectOrDomain && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800/90 text-xs font-mono text-cyan-300 mb-3">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>Project: {ach.projectOrDomain}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              {/* Footer with Prize or Recognition */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                {ach.prize ? (
                  <span className="font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    🏆 {ach.prize}
                  </span>
                ) : (
                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Milestone
                  </span>
                )}
                <span className="text-[11px] font-mono text-slate-500 group-hover:text-amber-400/80 transition-colors">
                  Click for celebration 🎉
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
