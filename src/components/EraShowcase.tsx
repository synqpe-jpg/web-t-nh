import { motion } from 'motion/react';
import { Clock, ArrowRight, Compass } from 'lucide-react';
import { Era } from '../types';

interface EraShowcaseProps {
  eras: Era[];
  selectedEraId: string | null;
  onSelectEra: (id: string | null) => void;
}

export default function EraShowcase({ eras, selectedEraId, onSelectEra }: EraShowcaseProps) {
  // Map our keys to artistic-appropriate contrast colors
  const indicatorClasses: Record<string, string> = {
    'amber-500': 'bg-amber-100 border-amber-900/30 text-amber-900',
    'indigo-500': 'bg-indigo-100 border-indigo-900/30 text-indigo-900',
    'sky-500': 'bg-sky-100 border-sky-900/30 text-sky-900',
    'emerald-500': 'bg-emerald-100 border-emerald-900/30 text-emerald-950',
    'blue-500': 'bg-blue-100 border-blue-900/30 text-blue-950',
    'violet-500': 'bg-violet-100 border-violet-900/30 text-violet-950',
    'rose-500': 'bg-rose-100 border-rose-900/30 text-rose-950',
    'teal-500': 'bg-teal-100 border-teal-900/30 text-teal-950',
  };

  const getBadgeClass = (color: string) => {
    return indicatorClasses[color] || 'bg-art-card-hover border-art-text text-art-text';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-serif text-3xl font-black uppercase text-art-text flex items-center gap-2">
            <Compass className="w-6 h-6 text-art-text" />
            Select an Epoch
          </h3>
          <p className="text-art-text/70 text-sm mt-0.5 font-sans">
            Compare the milestones of each era, from early automata hypotheses to modern generative AI.
          </p>
        </div>

        {selectedEraId && (
          <button
            onClick={() => onSelectEra(null)}
            className="text-xs font-mono font-black text-art-text hover:bg-art-text hover:text-art-bg transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent px-4 py-2 border border-art-text"
          >
            Show All Historical Milestones <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid structure of Eras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-art-text">
        {eras.map((era) => {
          const isSelected = selectedEraId === era.id;
          const badgeClass = getBadgeClass(era.accentColor);

          return (
            <button
              key={era.id}
              onClick={() => onSelectEra(isSelected ? null : era.id)}
              className={`text-left p-6 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden cursor-pointer group focus:outline-none border-b sm:border-b-0 sm:border-r border-art-text last:border-r-0 last:border-b-0 ${
                isSelected
                  ? 'bg-art-highlight text-art-text'
                  : 'bg-art-bg hover:bg-art-card-hover/90 text-art-text'
              }`}
            >
              <div className="space-y-3.5 relative z-10 w-full">
                {/* Year Range Badge */}
                <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 uppercase tracking-wider font-bold border ${badgeClass}`}>
                  <Clock className="w-3.5 h-3.5" />
                  {era.timeRange}
                </span>

                {/* Title */}
                <h4 className="font-serif text-lg font-black uppercase tracking-tight text-art-text">
                  {era.title}
                </h4>

                {/* Short explanation */}
                <p className="text-xs text-art-text/80 leading-relaxed font-serif line-clamp-3">
                  {era.description}
                </p>
              </div>

              {/* Selection indicator dots */}
              <div className="flex items-center justify-between w-full pt-2 border-t border-art-text/20 mt-3 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-art-text">
                  {isSelected ? 'ACTIVE EPOCH' : 'SELECT'}
                </span>
                <span
                  className={`w-3.5 h-3.5 transition-all duration-300 border border-art-text ${
                    isSelected ? 'bg-art-text' : 'bg-transparent group-hover:bg-art-text'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

