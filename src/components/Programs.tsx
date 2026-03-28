import { useLanguage } from '../context/LanguageContext';
import { Calendar, CheckCircle2, School, GraduationCap } from 'lucide-react';

export function Programs() {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-surface-container" id="programs">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            {t.programs.title}
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Short-Term */}
          <div className="bento-card group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-secondary/20 rounded-2xl">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <span className="bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t.programs.p1Tag}
                </span>
              </div>
              <h3 className="text-3xl font-black text-primary mb-4">
                {t.programs.p1Title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t.programs.p1Desc}
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p1B1}
                </li>
                <li className="flex items-center text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p1B2}
                </li>
                <li className="flex items-center text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p1B3}
                </li>
                <li className="flex items-center text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p1B4}
                </li>
              </ul>
            </div>
            <button 
              onClick={scrollToForm}
              className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform">
              {t.programs.p1Btn}
            </button>
          </div>

          {/* Full-Term */}
          <div className="bento-card group bg-primary p-10 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <School className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <span className="bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t.programs.p2Tag}
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">
                {t.programs.p2Title}
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                {t.programs.p2Desc}
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center text-white/90 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p2B1}
                </li>
                <li className="flex items-center text-white/90 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p2B2}
                </li>
                <li className="flex items-center text-white/90 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p2B3}
                </li>
                <li className="flex items-center text-white/90 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 fill-current" />{' '}
                  {t.programs.p2B4}
                </li>
              </ul>
            </div>
            <button 
              onClick={scrollToForm}
              className="w-full py-4 bg-secondary text-primary rounded-2xl font-bold hover:scale-[1.02] transition-transform relative z-10">
              {t.programs.p2Btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
