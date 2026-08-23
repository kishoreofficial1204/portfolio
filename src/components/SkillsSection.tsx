import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Cpu,
  Cloud,
  ShieldCheck,
  Terminal,
  Search,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Layers':
        return Layers;
      case 'Database':
        return Database;
      case 'Cpu':
        return Cpu;
      case 'Cloud':
        return Cloud;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Terminal':
        return Terminal;
      default:
        return Code;
    }
  };

  const filteredCategories = skillCategories.map((category) => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Comprehensive Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Spanning full-stack web, generative AI workflows, cloud databases, and core computer science principles.
          </p>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Stacks ({totalSkillsCount})
            </motion.button>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name.split(' ')[0]} ({cat.skills.length})
              </motion.button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D1424] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Skills Category Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, idx) => {
              if (!category) return null;
              const Icon = getCategoryIcon(category.iconName);

              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#0D1424] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-slate-100 text-base">
                          {category.name}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} competencies
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-200 font-medium">{skill.name}</span>
                              {skill.featured && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Core Specialty" />
                              )}
                            </div>
                            {skill.tag && (
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                                {skill.tag}
                              </span>
                            )}
                          </div>

                          {/* Skill Level Bar with animation */}
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-cyan-950/30 border border-emerald-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-100">
                Core Engineering Strengths
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Full-Stack MERN Architecture • GenAI & RAG Integrations • RESTful API Design • Data Structures in Java & Python
              </p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            See in Action in Projects →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
