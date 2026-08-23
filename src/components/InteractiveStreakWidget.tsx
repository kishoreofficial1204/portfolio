import React, { useState } from 'react';
import {
  Flame,
  Award,
  CheckCircle2,
  Code2,
  Sparkles,
  Zap,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  id: number;
  question: string;
  topic: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Data Structures & Algorithms',
    question: 'What is the average time complexity of searching in a balanced Hash Table vs. a Binary Search Tree (BST)?',
    options: ['O(1) vs O(log n)', 'O(n) vs O(1)', 'O(log n) vs O(n)', 'O(1) vs O(n)'],
    correct: 0,
    explanation: 'A balanced Hash Table provides O(1) average lookup, whereas a balanced BST offers O(log n) lookup.',
  },
  {
    id: 2,
    topic: 'Full Stack & Web Architecture',
    question: 'In a secure MERN application, why should JWT refresh tokens ideally be stored in HTTP-Only cookies rather than localStorage?',
    options: [
      'To prevent Cross-Site Scripting (XSS) token theft',
      'To make database lookups faster',
      'To automatically compress JSON payloads',
      'Because localStorage only supports strings',
    ],
    correct: 0,
    explanation: 'HTTP-Only cookies cannot be accessed via JavaScript `document.cookie`, mitigating XSS credential theft.',
  },
  {
    id: 3,
    topic: 'AI & Retrieval-Augmented Generation (RAG)',
    question: 'In a RAG pipeline with LLMs, what is the primary role of Vector Embeddings?',
    options: [
      'To mathematically represent text semantics for similarity retrieval',
      'To encrypt private API keys',
      'To format output into Markdown',
      'To render CSS on the client',
    ],
    correct: 0,
    explanation: 'Vector embeddings map textual semantic meaning into high-dimensional vector space for cosine similarity lookups.',
  },
  {
    id: 4,
    topic: 'Database Systems (DBMS)',
    question: 'Which ACID property ensures that all operations within a database transaction succeed or all fail together?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correct: 0,
    explanation: 'Atomicity enforces all-or-nothing execution for database transaction statements.',
  },
];

export const InteractiveStreakWidget: React.FC = () => {
  const [streakCount, setStreakCount] = useState<number>(14);
  const [points, setPoints] = useState<number>(450);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const currentQ = quizQuestions[currentQIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const correct = index === currentQ.correct;
    setIsCorrect(correct);

    if (correct) {
      setStreakCount((prev) => prev + 1);
      setPoints((prev) => prev + 100);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10B981', '#34D399', '#06B6D4'],
      });
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentQIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  // Generate a mock streak activity grid reminiscent of CodeStreak & GitHub
  const days = Array.from({ length: 28 }, (_, i) => {
    const intensity = (i % 7 === 0 || i % 5 === 0 || i > 20) ? Math.min(4, ((i * 3) % 5)) : (i % 3);
    return { day: i + 1, level: intensity };
  });

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1222] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-2">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>CODESTREAK INTERACTIVE PLAYGROUND</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                Gamified Daily Coding & CS Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Inspired by my project <strong className="text-emerald-400">CodeStreak</strong>. Test your technical knowledge across CS domains to earn streak multipliers and points!
              </p>
            </div>

            {/* Live Gamified Counters */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-orange-500/30 flex items-center gap-3 shadow-md"
              >
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Current Streak</p>
                  <p className="text-lg font-display font-bold text-orange-400">{streakCount} Days</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-emerald-500/30 flex items-center gap-3 shadow-md"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Reward Points</p>
                  <p className="text-lg font-display font-bold text-emerald-400">{points} PTS</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Challenge & Heatmap Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Interactive Question Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#080C14] border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  Topic: {currentQ.topic}
                </span>
                <span className="text-slate-500 font-mono">
                  Question {currentQIndex + 1} of {quizQuestions.length}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700';

                  if (isAnswered) {
                    if (idx === currentQ.correct) {
                      btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-semibold';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500/60 font-semibold';
                    } else {
                      btnStyle = 'bg-slate-900/40 text-slate-500 border-slate-900 opacity-60';
                    }
                  }

                  return (
                    <motion.button
                      whileHover={!isAnswered ? { x: 4 } : {}}
                      whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === currentQ.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback and Next */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <p className="text-xs text-slate-400">
                    {isCorrect ? (
                      <span className="text-emerald-400 font-semibold">
                        ✓ Correct! +100 PTS added to your streak!
                      </span>
                    ) : (
                      <span className="text-rose-400 font-semibold">
                        ✗ {currentQ.explanation}
                      </span>
                    )}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextQuestion}
                    className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md"
                  >
                    Next Question →
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Streak Visual Heatmap & CodeStreak Stats (5 cols) */}
            <div className="lg:col-span-5 bg-[#080C14] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Activity Heatmap (Last 4 Weeks)
                </h4>
                <span className="text-[11px] font-mono text-emerald-400">Active</span>
              </div>

              {/* Activity Grid */}
              <div className="grid grid-cols-7 gap-1.5 p-3 rounded-xl bg-slate-950 border border-slate-900">
                {days.map((d) => {
                  const colors = [
                    'bg-slate-900',
                    'bg-emerald-950 text-emerald-800',
                    'bg-emerald-800 text-emerald-300',
                    'bg-emerald-600 text-emerald-100',
                    'bg-emerald-400 text-slate-950',
                  ];
                  return (
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      key={d.day}
                      className={`aspect-square rounded-md ${colors[d.level]} flex items-center justify-center text-[9px] font-mono transition-transform cursor-pointer`}
                      title={`Day ${d.day}: ${d.level * 2} assignments solved`}
                    >
                      {d.day}
                    </motion.div>
                  );
                })}
              </div>

              {/* Badges Earned */}
              <div className="pt-2">
                <p className="text-xs font-mono text-slate-400 mb-2">Unlocked Badges:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-mono flex items-center gap-1">
                    🔥 14-Day Streak
                  </span>
                  <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-mono flex items-center gap-1">
                    ⚡ Algorithmic Solver
                  </span>
                  <span className="px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono flex items-center gap-1">
                    🛡️ System Architect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
