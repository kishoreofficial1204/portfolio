import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Code2,
  Server,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import { workExperience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering production-grade software features, API backends, and maintainable full-stack systems.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-[#0D1424] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors shadow-xl group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-transparent" />

              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl font-display font-bold text-slate-100 hover:text-emerald-400 hover:underline transition-all flex items-center gap-1.5"
                      >
                        {exp.company}
                        <ArrowUpRight className="w-5 h-5 text-emerald-400/80 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-2xl font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Freelance
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-300">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description & Impact Bullets */}
              <div className="py-6 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-400"
                    >
                      <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="leading-relaxed">{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Used Footer */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">
                  Stack & Tooling:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
