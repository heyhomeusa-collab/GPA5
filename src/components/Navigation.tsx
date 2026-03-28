import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { currentLang, setCurrentLang, t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-lg">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-primary uppercase tracking-tighter">
          GPA
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary font-bold border-b-2 border-secondary pb-1"
            href="#about"
          >
            {t.nav.about}
          </a>
          <a
            className="text-slate-600 hover:text-primary transition-colors font-semibold"
            href="#programs"
          >
            {t.nav.programs}
          </a>
          <a
            className="text-slate-600 hover:text-primary transition-colors font-semibold"
            href="#process"
          >
            {t.nav.process}
          </a>
          <a
            className="text-slate-600 hover:text-primary transition-colors font-semibold"
            href="#faq"
          >
            {t.nav.faq}
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-slate-600 font-semibold text-sm">
            <Globe className="w-5 h-5" />
            <span 
              className={`cursor-pointer transition-all ${currentLang === 'EN' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setCurrentLang('EN')}
            >
              EN
            </span>
            <span className="text-slate-300">|</span>
            <span 
              className={`cursor-pointer transition-all ${currentLang === 'ES' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setCurrentLang('ES')}
            >
              ES
            </span>
            <span 
              className={`cursor-pointer transition-all ${currentLang === 'PT' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setCurrentLang('PT')}
            >
              PT
            </span>
            <span 
              className={`cursor-pointer transition-all ${currentLang === 'TR' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setCurrentLang('TR')}
            >
              TR
            </span>
          </div>
          <button 
            onClick={scrollToForm}
            className="bg-primary text-white px-6 py-2.5 rounded-2xl font-bold hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20"
          >
            {t.nav.apply}
          </button>
        </div>
      </div>
    </nav>
  );
}
