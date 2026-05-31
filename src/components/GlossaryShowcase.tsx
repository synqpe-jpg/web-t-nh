import { useState, useMemo } from 'react';
import { Search, Book, HelpCircle } from 'lucide-react';
import { GlossaryTerm } from '../types';

interface GlossaryShowcaseProps {
  glossary: GlossaryTerm[];
}

export default function GlossaryShowcase({ glossary }: GlossaryShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = useMemo(() => {
    return glossary.filter(
      (item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.eraContext.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [glossary, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Search Bar Block */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-art-card-hover border border-art-text p-6 rounded-none shadow-sm">
        <div className="flex items-center gap-3">
          <Book className="w-5 h-5 text-art-text shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-black uppercase text-art-text">Artificial Intelligence Lexicon</h3>
            <p className="text-art-text/75 text-xs mt-0.5 font-sans">
              Demystifying the foundational technologies, architectures, and events of computer science.
            </p>
          </div>
        </div>

        {/* Search Input inline */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-art-text/40" />
          <input
            type="text"
            placeholder="Search key terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-art-bg text-art-text border border-art-text rounded-none py-2 pl-9 pr-4 text-xs focus:outline-none focus:bg-art-highlight/10 transition-all placeholder:text-art-text/30 font-sans font-bold"
          />
        </div>
      </div>

      {/* Grid of Definitions */}
      {filteredGlossary.length === 0 ? (
        <div className="text-center py-12 bg-art-bg border border-dashed border-art-text/40 rounded-none">
          <HelpCircle className="w-6 h-6 text-art-text/40 mx-auto mb-2" />
          <p className="text-art-text/60 text-sm font-serif italic">No term found matching your search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item) => (
            <div
              key={item.term}
              className="bg-art-bg border border-art-text hover:bg-art-card-hover/30 p-5 rounded-none space-y-3.5 transition-colors duration-200 font-serif"
            >
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-serif text-base text-art-text font-black uppercase tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-art-text" />
                  {item.term}
                </h4>
                <span className="text-[9px] font-mono text-art-text font-bold uppercase tracking-wider bg-art-highlight px-2.5 py-0.5 border border-art-text/30">
                  {item.eraContext}
                </span>
              </div>
              <p className="text-art-text/90 text-xs sm:text-sm leading-relaxed font-serif">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
