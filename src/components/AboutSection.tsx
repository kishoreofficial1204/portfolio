import React from 'react';
import {
  Code2,
  Cpu,
  Server,
  Layers,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Zap,
  Target,
  BrainCircuit,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      color: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-400',
      title: 'Full-Stack Web Engineering',
      desc: 'Architecting robust, end-to-end web applications with React.js, Node.js, Express, MongoDB, and Tailwind CSS with responsive, accessible user interfaces.',
    },
    {
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400',
      title: 'Generative AI & LLM Systems',
      desc: 'Building intelligent workflows incorporating Large Language Models, Retrieval-Augmented Generation (RAG), the Gemini API, and semantic vector matching.',
    },
    {
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      iconColor: 'text-indigo-400',
      title: 'Secure Microservices & REST APIs',
      desc: 'Implementing secure JWT authentication, role-based access control, relational and NoSQL database schemas with ACID compliance and high availability.',
    },
    {
      icon: BrainCircuit,
      color: 'from-amber-500 to-orange-500',
      iconColor: 'text-amber-400',
      title: 'Algorithmic Problem Solving',
      desc: 'Grounding every architecture in core Computer Science fundamentals: Data Structures, Algorithms, Object-Oriented Design, Operating Systems, and Networking.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Engineering with Precision & Innovation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging robust software architecture with next-generation generative AI to build tools that solve genuine problems.
          </p>
        </motion.div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Biography Narrative Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-[#0D1424] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Software Engineer Driven by Practical Impact
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a Computer Science & Engineering undergraduate at{' '}
                <strong className="text-white">Sri Krishna College of Technology (SKCT)</strong>, holding a{' '}
                <strong className="text-emerald-400">8.21 CGPA</strong>. My software journey revolves around turning theoretical CS algorithms into real-world, production-ready software solutions.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                As a freelance Software Engineer at <strong className="text-slate-200">Blastorz</strong>, I have designed scalable backend REST APIs, modernized UI components, optimized database queries, and implemented end-to-end authentication pipelines. Additionally, I actively represent my institution at national hackathons like the <strong className="text-cyan-300">Smart India Hackathon (SIH 2025 Top 20)</strong> and <strong className="text-emerald-300">MSME Hackathon 2025 (Top 50)</strong>.
              </p>
            </div>

            {/* Core Competency Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Stack MERN</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RAG & LLM Workflows</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>REST API Security</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>FastAPI & Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>PostgreSQL & Mongo</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Selenium & JUnit QA</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats & Philosophy Bento (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Academic Merit</p>
                <h4 className="text-base font-semibold text-slate-100">B.E. Computer Science</h4>
                <p className="text-xs text-slate-400 mt-0.5">Sri Krishna College of Technology (2024-2028)</p>
                <p className="text-xs font-mono text-emerald-400 font-bold mt-1">CGPA: 8.21 / 10</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/30 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Hackathon Track Record</p>
                <h4 className="text-base font-semibold text-slate-100">National Finalist</h4>
                <p className="text-xs text-slate-400 mt-0.5">Dev Hackathon Grand Finalist [AETHER] & SIH Top 20</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Production Experience</p>
                <h4 className="text-base font-semibold text-slate-100">Freelance SWE @ Blastorz</h4>
                <p className="text-xs text-slate-400 mt-0.5">Full lifecycle feature shipping, API engineering & testing</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Pillars Grid with motion staggering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#0D1424]/90 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 transition-colors shadow-xl group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-[1px] mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-base font-display font-semibold text-slate-100 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
