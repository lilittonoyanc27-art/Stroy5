import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Construction, 
  Search, 
  BookOpen, 
  ChevronRight, 
  Hammer, 
  HardHat, 
  Zap, 
  ShieldAlert, 
  Wallet, 
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { DICTIONARY_DATA, DictionaryCategory } from './dictionaryData';

export default function ConstructionDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = DICTIONARY_DATA.map(cat => ({
    ...cat,
    entries: cat.entries.filter(entry => 
      entry.es.toLowerCase().includes(searchTerm.toLowerCase()) || 
      entry.hy.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.entries.length > 0);

  const getIcon = (title: string) => {
    if (title.includes('Աշխատանք')) return <Briefcase className="text-blue-500" />;
    if (title.includes('Մասնագիտություններ')) return <HardHat className="text-orange-500" />;
    if (title.includes('Շինհրապարակում')) return <Construction className="text-yellow-600" />;
    if (title.includes('Գործիքներ')) return <Hammer className="text-slate-500" />;
    if (title.includes('Գործողություններ')) return <Zap className="text-amber-500" />;
    if (title.includes('Անվտանգություն')) return <ShieldAlert className="text-rose-500" />;
    if (title.includes('Աշխատավարձ')) return <Wallet className="text-emerald-500" />;
    if (title.includes('Կարևոր բառեր')) return <Layers className="text-indigo-500" />;
    return <BookOpen className="text-indigo-500" />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-32">
      {/* Header Section */}
      <header className="bg-slate-900 text-white pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -translate-y-12 translate-x-12" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-12 -translate-x-12" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]"
          >
            🇪🇸 Շինարարական Բառարան
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] sm:leading-none"
          >
            Diccionario de <br/>
            <span className="text-orange-500">Construcción</span>
          </motion.h1>
          <p className="text-slate-400 font-bold italic text-sm sm:text-xl max-w-2xl mx-auto uppercase tracking-wide px-4">
             Աշխատանքային արտահայտություններ և տերմիններ իսպաներենով
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl p-3 sm:p-6 border border-slate-100 flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-400">
            <Search size={20} className="sm:w-6 sm:h-6" />
          </div>
          <input 
            type="text" 
            placeholder="Փնտրել..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none focus:ring-0 text-lg sm:text-xl font-bold italic placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-4xl mx-auto px-6 py-8 flex gap-3 overflow-x-auto no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-2.5 rounded-full whitespace-nowrap font-black uppercase text-[10px] tracking-widest transition-all ${!selectedCategory ? 'bg-orange-600 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100'}`}
        >
          Բոլորը
        </button>
        {DICTIONARY_DATA.map(cat => (
          <button 
            key={cat.title}
            onClick={() => setSelectedCategory(cat.title)}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap font-black uppercase text-[10px] tracking-widest transition-all ${selectedCategory === cat.title ? 'bg-orange-600 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100'}`}
          >
            {cat.title.split('. ')[1]}
          </button>
        ))}
      </div>

      {/* Dictionary Content */}
      <main className="max-w-4xl mx-auto px-6 space-y-12">
        {filteredCategories
          .filter(cat => !selectedCategory || cat.title === selectedCategory)
          .map((cat, idx) => (
          <motion.section 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 sm:gap-4 border-b-4 border-slate-900 pb-3 sm:pb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0">
                {getIcon(cat.title)}
              </div>
              <h2 className="text-xl sm:text-3xl font-black italic uppercase tracking-tighter text-slate-900 line-clamp-2">
                {cat.title}
              </h2>
            </div>

            <div className="grid gap-4">
              {cat.entries.map((entry, eIdx) => (
                <motion.div 
                  key={eIdx}
                  whileHover={{ x: 10 }}
                  className="bg-white p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <p className="text-lg sm:text-2xl font-black italic text-slate-900 uppercase tracking-tight group-hover:text-orange-600 transition-colors break-words">
                      {entry.es}
                    </p>
                    <p className="text-slate-400 font-bold italic uppercase text-[10px] sm:text-xs tracking-widest">
                       Իսպաներեն
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-200 hidden sm:flex shrink-0">
                     <ArrowRight />
                  </div>
                  <div className="space-y-1 text-left sm:text-right flex-1 min-w-0">
                    <p className="text-base sm:text-xl font-bold italic text-slate-600 break-words">
                      {entry.hy}
                    </p>
                    <p className="text-slate-300 font-bold italic uppercase text-[10px] tracking-widest">
                       Հայերեն
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {filteredCategories.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <Search size={48} className="mx-auto text-slate-200" />
            <p className="text-slate-400 font-bold italic uppercase tracking-widest">Ոչինչ չի գտնվել</p>
          </div>
        )}
      </main>

      {/* Quick Access Nav */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-full px-8 py-4 flex items-center gap-10 text-white">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Construction Academy</p>
      </nav>
    </div>
  );
}
