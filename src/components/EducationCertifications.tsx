import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { education, certifications } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Solid foundation in Computer Science & Engineering accompanied by verified technical certifications.
          </p>
        </motion.div>

        {/* Two-Column Grid: Education (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-display font-bold text-slate-100">
                Formal Academic Journey
              </h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
              {education.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-[#0D1424] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors shadow-lg group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full border-2 bg-[#080C14] ${
                      item.current
                        ? 'border-emerald-400 ring-4 ring-emerald-500/20'
                        : 'border-slate-600'
                    }`}
                  />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 w-fit">
                      {item.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {item.institution}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-1">
                    {item.degree}
                  </p>
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {item.location}
                  </p>

                  {/* Bullet details */}
                  {item.details && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs text-slate-400">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-display font-bold text-slate-100">
                Verified Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, cIdx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="bg-[#0D1424] border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 transition-colors shadow-md group flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-100 truncate group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-emerald-400 border border-slate-800">
                      {cert.badge}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Skills Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900 to-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-3"
            >
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Continuous Learning Focus
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Regularly undertaking advanced technical coursework in Artificial Intelligence, Distributed Microservices, and Cloud Computing to maintain cutting-edge industry competencies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
