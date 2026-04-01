import React from 'react';
import { 
  Play, 
  Shield, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Building, 
  Stars,
  GraduationCap,
  Home,
  FileBadge,
  PlaneLanding
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BLOB_BASE_URL } from '../constants';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSteps = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToForm = () => {
    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <header className="relative pt-32 pb-20 bg-primary min-h-[870px] flex items-center justify-center text-center" id="about">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="Stunning Orlando skyline at sunset"
            src={`${BLOB_BASE_URL}/pics/hero.jpg`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background"></div>
        </div>
        <div className="relative z-30 max-w-4xl mx-auto px-8 w-full mt-10">
          <span className="inline-block px-5 py-2 mb-8 rounded-full bg-secondary text-primary font-black text-sm uppercase tracking-widest shadow-sm">
            {t.hero.partner}
          </span>
          <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8">
            {t.hero.title1} <br />
            <span className="text-secondary">{t.hero.title2}</span> {t.hero.title3}
          </h1>
          <p className="text-white/90 text-2xl font-medium mb-12 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button 
              onClick={scrollToSteps}
              className="w-full sm:w-auto bg-secondary text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-secondary/20"
            >
              {t.hero.getStarted}
            </button>
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-black/10"
            >
              Apply now
            </button>
          </div>

          {/* Interactive Icons */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {[
              { icon: <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8" />, label: t.hero.iconAcademic },
              { icon: <Home className="w-6 h-6 lg:w-8 lg:h-8" />, label: t.hero.iconHousing },
              { icon: <FileBadge className="w-6 h-6 lg:w-8 lg:h-8" />, label: t.hero.iconVisa },
              { icon: <PlaneLanding className="w-6 h-6 lg:w-8 lg:h-8" />, label: t.hero.iconArrival },
              { icon: <Globe className="w-6 h-6 lg:w-8 lg:h-8" />, label: t.hero.iconCommunity }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative cursor-pointer group"
              >
                <div className="bg-white/10 backdrop-blur-md p-4 lg:p-5 rounded-full border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 text-white">
                  {item.icon}
                </div>
                <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-48 bg-white/80 backdrop-blur-xl border border-white text-primary text-sm font-bold p-3 rounded-xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
  );
}
