import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Info, 
  ChevronRight, 
  BookOpen,
  Construction
} from 'lucide-react';
import ConstructionDictionary from './ConstructionDictionary';

export type AppScreen = 'menu' | 'dictionary';

function NavButton({ active, icon, onClick, label }: { active: boolean, icon: any, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 group relative transition-all ${active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
    >
      <div className={`p-2.5 rounded-2xl transition-all ${active ? 'bg-orange-600 text-white shadow-xl shadow-orange-100' : 'text-slate-600'}`}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-orange-600' : 'text-slate-400'}`}>
        {label}
      </span>
    </button>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {screen === 'menu' && (
          <motion.div 
            key="menu" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-6xl mx-auto px-6 pt-24 sm:pt-40 space-y-24"
          >
            <div className="space-y-12 text-center sm:text-left">
              <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex p-4 bg-orange-500/10 rounded-3xl text-orange-600 shadow-inner border border-orange-500/20"
              >
                 <Construction className="w-12 h-12" />
              </motion.div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.8]">
                  Construction <br/><span className="text-orange-600">Vocabulary</span>
                </h1>
                <p className="text-[10px] sm:text-xl font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.4em] pt-4">
                  Spanish Academy • Շինարարական Բառապաշար
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-32">
              <motion.button 
                whileHover={{ y: -10 }}
                onClick={() => setScreen('dictionary')}
                className="group bg-slate-900 p-8 sm:p-14 rounded-[3rem] shadow-2xl text-left space-y-6 relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150" />
                <div className="w-16 h-16 bg-orange-600/20 rounded-3xl flex items-center justify-center text-orange-400 shadow-xl rotate-3 group-hover:rotate-12 transition-all">
                   <BookOpen className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-orange-400">Բացել Բառարանը</h3>
                  <p className="text-white/60 font-bold italic leading-tight text-base sm:text-lg">Շինարարության ոլորտի բոլոր անհրաժեշտ ֆրազները և բառերը:</p>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-black uppercase text-xs tracking-widest pt-4">
                   Մուտք <ChevronRight className="w-4 h-4" />
                </div>
              </motion.button>

              <div className="bg-white p-8 sm:p-14 rounded-[3rem] border border-slate-100 shadow-xl space-y-6 flex flex-col justify-center">
                 <div className="space-y-2">
                    <p className="text-orange-600 font-black uppercase text-[10px] tracking-widest">Spanish Language</p>
                    <h4 className="text-2xl font-black italic uppercase tracking-tight">10 Categories</h4>
                    <p className="text-slate-400 font-bold italic">Ավելի քան 100 արտահայտություն աշխատանքի փնտրտուքից մինչև անվտանգություն:</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 text-xl">🇪🇸</div>
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 text-xl">🇦🇲</div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {screen === 'dictionary' && (
          <motion.div key="dictionary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ConstructionDictionary />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-2xl border border-orange-50 shadow-2xl rounded-full px-8 py-4 flex items-center gap-10">
        <NavButton active={screen === 'menu'} icon={<Home />} onClick={() => setScreen('menu')} label="Մենյու" />
        <NavButton active={screen === 'dictionary'} icon={<BookOpen />} onClick={() => setScreen('dictionary')} label="Բառարան" />
      </nav>

      <footer className="py-20 text-center pb-32">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-[10px] tracking-[0.4em]">
           <Info className="w-4 h-4" /> CONSTRUCTION ACADEMY • 2026
        </div>
      </footer>
    </div>
  );
}
