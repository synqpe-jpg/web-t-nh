import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Trophy, User, ArrowRight } from 'lucide-react';
import { Pioneer } from '../types';

interface PioneerShowcaseProps {
  pioneers: Pioneer[];
}

export default function PioneerShowcase({ pioneers }: PioneerShowcaseProps) {
  const [selectedPioneerId, setSelectedPioneerId] = useState<string>(pioneers[0].id);

  const activePioneer = pioneers.find((p) => p.id === selectedPioneerId) || pioneers[0];

  return (
    <div className="space-y-8">
      {/* Visual Title Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 pb-2">
        <h3 className="font-serif text-3xl font-black uppercase tracking-tight text-art-text">Pioneers & Visionaries</h3>
        <p className="text-art-text/75 text-sm font-sans italic">
          The brilliant theorists, mathematicians, and cognitive scientists who laid the mathematical and logical foundations of machine intelligence.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Pioneer List Selection Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <span className="block text-xs font-mono text-art-text/60 font-bold uppercase tracking-widest pl-1 mb-3">
            ARCHIVAL RECORDS
          </span>
          <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-3 lg:pb-0 scrollbar-none">
            {pioneers.map((pioneer) => {
              const isSelected = pioneer.id === selectedPioneerId;
              return (
                <button
                  key={pioneer.id}
                  onClick={() => setSelectedPioneerId(pioneer.id)}
                  className={`flex-none lg:flex-1 text-left px-5 py-4 rounded-none border transition-all duration-300 min-w-[200px] cursor-pointer ${
                    isSelected
                      ? 'bg-art-text border-art-text text-art-bg font-black shadow-md'
                      : 'bg-art-bg border-art-text/35 text-art-text/80 hover:border-art-text hover:bg-art-card-hover/90'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 font-mono font-bold flex items-center justify-center text-[10px] shrink-0 border ${
                        isSelected
                          ? 'bg-art-bg text-art-text border-art-bg'
                          : 'bg-art-card-hover text-art-text border-art-text/40'
                      }`}
                    >
                      {pioneer.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-black uppercase tracking-tight">{pioneer.name}</h4>
                      <span className={`block text-[10px] font-mono mt-0.5 ${isSelected ? 'text-art-bg/70' : 'text-art-text/50'}`}>
                        {pioneer.period}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Biography Dossier */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePioneer.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-art-bg border border-art-text rounded-none p-6 md:p-8 space-y-6 shadow-md relative overflow-hidden"
            >
              {/* Dossier Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-art-text/40 pb-5 relative">
                <div className="space-y-1.5 w-full">
                  <span className="text-[10px] font-mono text-art-text uppercase tracking-widest bg-art-highlight border border-art-text/40 px-3 py-1 font-bold">
                    {activePioneer.title}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-black text-art-text mt-3 uppercase tracking-tighter">
                    {activePioneer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-art-text/70 mt-1">
                    <User className="w-3.5 h-3.5 text-art-text/60" />
                    <span>ACTIVE RECORD: {activePioneer.period}</span>
                  </div>
                </div>
              </div>

              {/* Quotes Block */}
              {activePioneer.famousQuote && (
                <div className="p-5 bg-art-card-hover border-l-4 border-art-text relative">
                  <Quote className="absolute right-4 top-4 w-12 h-12 text-art-text/10 pointer-events-none" />
                  <p className="font-serif text-art-text italic text-sm md:text-base leading-relaxed relative font-medium">
                    "{activePioneer.famousQuote}"
                  </p>
                </div>
              )}

              {/* Bio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* General Bio */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-art-text uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 bg-art-text" />
                    Historical Narrative
                  </h4>
                  <p className="text-art-text/90 text-sm leading-relaxed font-serif">
                    {activePioneer.biography}
                  </p>
                </div>

                {/* Key Contributions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-art-text uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <Trophy className="w-4 h-4 text-art-text" />
                    Core Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {activePioneer.keyContributions.map((contrib, i) => (
                      <li key={i} className="flex gap-2 text-art-text/90 text-xs sm:text-sm leading-relaxed">
                        <ArrowRight className="w-4 h-4 text-art-text shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom tag identifier */}
              <div className="bg-art-card-hover border border-art-text/30 px-5 py-3.5 rounded-none flex justify-between items-center text-xs">
                <span className="text-[10px] font-mono text-art-text/60 uppercase tracking-[0.1em]">DIGITAL PIONEER CATALOG INDEX</span>
                <span className="text-[10px] font-mono font-bold text-art-text uppercase select-all">{activePioneer.id.toUpperCase()}_RECORD_VERIFIED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
