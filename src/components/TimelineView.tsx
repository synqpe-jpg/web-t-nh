import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, ChevronDown, ChevronUp, Sparkles, Filter, X } from 'lucide-react';
import { Era, Milestone } from '../types';

interface TimelineViewProps {
  eras: Era[];
  milestones: Milestone[];
  selectedEraId: string | null;
  onSelectEra: (id: string | null) => void;
}

export default function TimelineView({
  eras,
  milestones,
  selectedEraId,
  onSelectEra,
}: TimelineViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedMilestoneId, setExpandedMilestoneId] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    milestones.forEach((m) => m.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet).sort();
  }, [milestones]);

  // Filter milestones based on Era, Search Query, and selected Tag
  const filteredMilestones = useMemo(() => {
    return milestones.filter((m) => {
      const matchesEra = selectedEraId ? m.eraId === selectedEraId : true;
      const matchesTag = selectedTag ? m.tags.includes(selectedTag) : true;
      const matchesSearch =
        searchQuery.trim() === '' ||
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.year.includes(searchQuery) ||
        (m.details && m.details.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesEra && matchesTag && matchesSearch;
    });
  }, [milestones, selectedEraId, selectedTag, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedMilestoneId((prev) => (prev === id ? null : id));
  };

  const getEraColor = (eraId: string) => {
    const era = eras.find((e) => e.id === eraId);
    return era ? era.accentColor : 'stone-400';
  };

  const getEraTitle = (eraId: string) => {
    const era = eras.find((e) => e.id === eraId);
    return era ? era.title : '';
  };

  const clearFilters = () => {
    onSelectEra(null);
    setSelectedTag(null);
    setSearchQuery('');
  };

  const isFiltered = selectedEraId !== null || selectedTag !== null || searchQuery !== '';

  return (
    <div id="timeline-section" className="space-y-8">
      {/* Filters Dashboard */}
      <div className="bg-art-card-hover border border-art-text p-6 md:p-8 rounded-none shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-art-text/40">
          <div>
            <h3 className="font-serif text-2xl font-black uppercase text-art-text flex items-center gap-2">
              <Filter className="w-5 h-5 text-art-text" />
              Filter the Annals of AI History
            </h3>
            <p className="text-art-text/70 text-xs mt-1 font-sans">
              Search by year, milestone, keyword, or explore specific eras below.
            </p>
          </div>

          {isFiltered && (
            <button
              onClick={clearFilters}
              className="text-xs text-art-text hover:bg-art-text hover:text-art-bg font-mono font-bold transition-all flex items-center gap-1.5 px-3 py-1.5 bg-transparent border border-art-text"
            >
              <X className="w-3.5 h-3.5" /> Clear All Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 font-sans">
          {/* Search Box */}
          <div className="relative">
            <label className="block text-art-text/70 text-xs font-mono font-bold uppercase tracking-wider mb-2">KEYWORD SEARCH</label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-art-text/50" />
              <input
                type="text"
                placeholder="Search milestones, technologies, papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-art-bg text-art-text border border-art-text rounded-none py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:bg-art-highlight/20 transition-all placeholder:text-art-text/30 font-serif"
              />
            </div>
          </div>

          {/* Quick Tags Filter */}
          <div>
            <label className="block text-art-text/70 text-xs font-mono font-bold uppercase tracking-wider mb-2">FILTER BY TOPIC</label>
            <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}
                  className={`text-xs px-2.5 py-1 rounded-none border font-mono tracking-wide font-medium transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-art-text border-art-text text-art-bg font-bold shadow-sm'
                      : 'bg-art-bg border-art-text/30 text-art-text/80 hover:border-art-text hover:text-art-text'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-art-text">
        {filteredMilestones.length === 0 ? (
          <div className="text-center py-16 bg-art-bg border border-dashed border-art-text/40 rounded-none">
            <Sparkles className="w-8 h-8 text-art-text/40 mx-auto mb-3" />
            <p className="text-art-text font-serif text-xl font-bold">No chronicled milestones found</p>
            <p className="text-art-text/60 text-sm mt-1 max-w-md mx-auto font-sans">
              Try adjusting your keyword filter, choosing a different era, or clearing all filters to reset the timeline.
            </p>
          </div>
        ) : (
          filteredMilestones.map((milestone, index) => {
            const isExpanded = expandedMilestoneId === milestone.id;
            const eraTitle = getEraTitle(milestone.eraId);

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                className="relative group font-serif"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[19px] sm:-left-[29px] top-1.5 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] border border-art-text transition-all duration-300 z-10 ${
                    isExpanded || selectedEraId === milestone.eraId
                      ? 'bg-art-text'
                      : 'bg-art-bg group-hover:bg-art-text'
                  }`}
                />

                {/* Milestone Card */}
                <div
                  className={`bg-art-bg border transition-all duration-300 ${
                    isExpanded
                      ? 'border-art-text bg-art-card-hover/40 shadow-md'
                      : 'border-art-text/40 hover:border-art-text hover:bg-art-card-hover/20'
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(milestone.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start gap-5"
                  >
                    <div className="space-y-3.5 flex-1 w-full">
                      {/* Year and Era Badge */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm sm:text-base font-black text-art-bg bg-art-text px-3 py-0.5 border border-art-text flex items-center gap-1.5 shadow-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {milestone.year}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-art-text/60 uppercase tracking-widest bg-art-highlight px-2.5 py-0.5 border border-art-text/30 font-bold">
                          {eraTitle}
                        </span>
                        {/* High impact indicator */}
                        {milestone.impactScore === 5 && (
                          <span className="text-[10px] font-mono font-bold uppercase text-amber-900 bg-amber-100 border border-amber-900/40 px-2 py-0.5 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> VERY HIGH IMPACT
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="font-serif text-xl sm:text-2xl font-black text-art-text group-hover:text-black uppercase tracking-tight leading-tight">
                        {milestone.title}
                      </h4>

                      {/* Basic Description */}
                      <p className="text-art-text/80 text-sm sm:text-base leading-relaxed max-w-4xl">
                        {milestone.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {milestone.tags.map((t) => (
                          <span
                            key={t}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTag(t === selectedTag ? null : t);
                            }}
                            className={`text-[11px] font-mono px-2 py-0.5 font-bold cursor-pointer transition-colors border ${
                              selectedTag === t
                                ? 'bg-art-text text-art-bg border-art-text'
                                : 'bg-transparent text-art-text/50 border-art-text/10 hover:border-art-text/50 hover:text-art-text'
                            }`}
                          >
                            #{t.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Chevron */}
                    <button className="text-art-text hover:bg-art-text hover:text-art-bg select-none self-start md:self-center p-2 bg-transparent border border-art-text/60 rounded-none transition-all cursor-pointer">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expanded deep details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && milestone.details && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-art-text bg-art-card-hover/90"
                      >
                        <div className="p-6 space-y-4">
                          <h5 className="text-xs font-mono text-art-text/60 uppercase tracking-widest border-b border-art-text/20 pb-2 font-black">
                            HISTORICAL ANALYSIS & DETAIL DOSSIER
                          </h5>
                          <p className="text-art-text text-sm sm:text-base leading-relaxed font-serif italic border-l-4 border-art-text pl-4 py-1.5 bg-art-bg/40">
                            {milestone.details}
                          </p>
                          <div className="pt-2 text-[10px] text-art-text/60 font-mono flex items-center gap-1.5 font-bold">
                            <span className="w-1.5 h-1.5 bg-green-700" />
                            ARCHIVAL ENTRY VERIFIED • CATALOG REVISION SECURED
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
