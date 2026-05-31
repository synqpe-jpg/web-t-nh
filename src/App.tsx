import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { eras, milestones, pioneers, glossary } from './data/aiHistoryData';
import TimelineView from './components/TimelineView';
import EraShowcase from './components/EraShowcase';
import PioneerShowcase from './components/PioneerShowcase';
import HistoryQuiz from './components/HistoryQuiz';
import GlossaryShowcase from './components/GlossaryShowcase';
import { Clock, Cpu, Award, Book, Search, Sparkles, AlertCircle } from 'lucide-react';

type TabId = 'timeline' | 'pioneers' | 'quiz' | 'glossary';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('timeline');
  const [selectedEraId, setSelectedEraId] = useState<string | null>(null);

  // Jump to timeline with filter when an era is selected
  const handleSelectEra = (eraId: string | null) => {
    setSelectedEraId(eraId);
    if (activeTab !== 'timeline') {
      setActiveTab('timeline');
    }
    // Scroll smoothly to timeline section if needed
    setTimeout(() => {
      const el = document.getElementById('timeline-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-art-bg text-art-text selection:bg-art-highlight font-serif transition-colors duration-300">
      {/* Top micro status bar */}
      <div className="border-b border-art-text bg-art-bg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-art-text animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-art-text/60 font-bold tracking-widest uppercase">
              HISTORICAL ARCHIVE 01 // DIGITAL SENTIENCE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-art-text/50 font-semibold">
            <span>LONDON MUSEUM OF TECH SPECIAL SHOWCASE</span>
            <span>|</span>
            <span>ENGLISH ARCHIVE EDITION</span>
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <header className="relative py-12 md:py-16 overflow-hidden border-b border-art-text bg-art-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-4 max-w-2xl">
              {/* Visual tiny tag */}
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-art-text uppercase tracking-widest border border-art-text px-3 py-1 bg-art-highlight/40">
                <Sparkles className="w-3.5 h-3.5" /> EXHIBITION VOLUME IV
              </span>

              {/* Title */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-art-text">
                THE AI<br />
                <span className="italic font-serif text-indigo-900 lowercase block sm:inline">chronicles</span>
              </h1>

              {/* Description */}
              <p className="text-art-text/80 text-base sm:text-lg leading-relaxed max-w-xl font-serif italic mt-4">
                Tracing the evolution of computational cognition from Alan Turing's formal mathematical models to the global rise of multimodal reasoning agents.
              </p>
            </div>

            {/* Quick stats and aesthetic dots */}
            <div className="lg:text-right max-w-xs space-y-4 w-full lg:w-auto">
              <p className="text-xs font-sans uppercase tracking-[0.2em] opacity-60">Catalogue Index Data</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-b border-art-text py-3 font-mono text-xs">
                <div>
                  <span className="text-art-text/50 block">EPOCHS:</span>
                  <span className="font-bold">{eras.length} CHRONICLES</span>
                </div>
                <div>
                  <span className="text-art-text/50 block">MILESTONES:</span>
                  <span className="font-bold">{milestones.length} ENTRIES</span>
                </div>
                <div>
                  <span className="text-art-text/50 block">PIONEERS:</span>
                  <span className="font-bold">{pioneers.length} ROSTER</span>
                </div>
                <div>
                  <span className="text-art-text/50 block">WINTERS:</span>
                  <span className="font-bold">2 SECURED</span>
                </div>
              </div>

              <div className="flex lg:justify-end gap-2 pt-2">
                <div className="w-3 h-3 bg-art-text rounded-full"></div>
                <div className="w-3 h-3 border border-art-text rounded-full"></div>
                <div className="w-3 h-3 border border-art-text rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        {/* Navigation Tabs with Sharp Exhibition Contrast */}
        <div className="flex border-b border-art-text overflow-x-auto scrollbar-none gap-2 pb-px">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2.5 px-5 py-3 border-t border-l border-r font-mono text-xs sm:text-sm tracking-widest transition-all uppercase cursor-pointer whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-art-text text-art-bg border-art-text font-black'
                : 'bg-transparent text-art-text/60 hover:text-art-text border-transparent hover:bg-art-card-hover/40'
            }`}
          >
            <Clock className="w-4 h-4 shrink-0" />
            01 // TIMELINE
          </button>
          <button
            onClick={() => setActiveTab('pioneers')}
            className={`flex items-center gap-2.5 px-5 py-3 border-t border-l border-r font-mono text-xs sm:text-sm tracking-widest transition-all uppercase cursor-pointer whitespace-nowrap ${
              activeTab === 'pioneers'
                ? 'bg-art-text text-art-bg border-art-text font-black'
                : 'bg-transparent text-art-text/60 hover:text-art-text border-transparent hover:bg-art-card-hover/40'
            }`}
          >
            <Cpu className="w-4 h-4 shrink-0" />
            02 // PIONEERS
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2.5 px-5 py-3 border-t border-l border-r font-mono text-xs sm:text-sm tracking-widest transition-all uppercase cursor-pointer whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-art-text text-art-bg border-art-text font-black'
                : 'bg-transparent text-art-text/60 hover:text-art-text border-transparent hover:bg-art-card-hover/40'
            }`}
          >
            <Award className="w-4 h-4 shrink-0" />
            03 // ASSESSMENT
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center gap-2.5 px-5 py-3 border-t border-l border-r font-mono text-xs sm:text-sm tracking-widest transition-all uppercase cursor-pointer whitespace-nowrap ${
              activeTab === 'glossary'
                ? 'bg-art-text text-art-bg border-art-text font-black'
                : 'bg-transparent text-art-text/60 hover:text-art-text border-transparent hover:bg-art-card-hover/40'
            }`}
          >
            <Book className="w-4 h-4 shrink-0" />
            04 // LEXICON
          </button>
        </div>

        {/* Dynamic Section Contents */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {/* Era selector display */}
                <EraShowcase
                  eras={eras}
                  selectedEraId={selectedEraId}
                  onSelectEra={handleSelectEra}
                />

                {/* Timeline display list */}
                <TimelineView
                  eras={eras}
                  milestones={milestones}
                  selectedEraId={selectedEraId}
                  onSelectEra={setSelectedEraId}
                />
              </motion.div>
            )}

            {activeTab === 'pioneers' && (
              <motion.div
                key="pioneers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <PioneerShowcase pioneers={pioneers} />
              </motion.div>
            )}

            {activeTab === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <HistoryQuiz />
              </motion.div>
            )}

            {activeTab === 'glossary' && (
              <motion.div
                key="glossary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <GlossaryShowcase glossary={glossary} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Exhibition Catalog Footer */}
      <footer className="border-t border-art-text bg-art-text text-art-bg py-16 mt-16 text-center text-xs font-sans space-y-6">
        <div className="max-w-7xl mx-auto px-12 space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">EXHIBITION CATALOG // VOL 4.0</div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-2">
            <div className="h-[1px] w-12 bg-art-bg opacity-30"></div>
            <div className="text-xs italic font-serif text-art-bg/80 max-w-lg leading-relaxed px-4">
              "The question of whether machines can think is about as relevant as the question of whether submarines can swim." — Edsger W. Dijkstra
            </div>
            <div className="h-[1px] w-12 bg-art-bg opacity-30"></div>
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50 pt-2">
            LONDON MUSEUM OF TECH • GENERAL PUBLIC DOMAIN
          </div>
        </div>
      </footer>
    </div>
  );
}
