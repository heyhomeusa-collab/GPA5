import { useLanguage } from '../context/LanguageContext';
import { Plane, Ticket, Calendar } from 'lucide-react';

export function AcademicPathway() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">{t.pathway.title}</h2>
            <div className="w-24 h-1.5 bg-secondary mt-4 mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg leading-relaxed">{t.pathway.desc}</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">IELTS EXEMPT</span>
            <span className="px-4 py-2 bg-green-100 text-green-900 text-xs font-bold rounded-full">TOEFL EXEMPT</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {[
            { level: "01", title: t.pathway.l1, desc: t.pathway.l1Desc },
            { level: "02", title: t.pathway.l2, desc: t.pathway.l2Desc },
            { level: "03", title: t.pathway.l3, desc: t.pathway.l3Desc },
            { level: "04", title: t.pathway.l4, desc: t.pathway.l4Desc },
            { level: "05", title: t.pathway.l5, desc: t.pathway.l5Desc },
            { level: "06", title: t.pathway.l6, desc: t.pathway.l6Desc },
            { level: "07", title: t.pathway.l7, desc: t.pathway.l7Desc, highlight: true }
          ].map((item, idx) => (
            <div key={idx} className={`group flex flex-col items-center text-center px-4 py-8 rounded-[2rem] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${item.highlight ? 'bg-secondary text-primary shadow-secondary/30 scale-105 z-10' : 'bg-white text-primary shadow-slate-200/50'}`}>
              <div className={`text-5xl font-black mb-6 transition-transform duration-300 group-hover:scale-110 ${item.highlight ? 'text-primary' : 'text-slate-100'}`}>
                {item.level}
              </div>
              <h4 className={`font-bold text-xs mb-4 uppercase tracking-wider ${item.highlight ? 'text-primary' : 'text-primary'}`}>{item.title}</h4>
              <p className={`text-[11px] leading-relaxed ${item.highlight ? 'text-primary/90' : 'text-slate-400'}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Next Start Dates Container */}
        <div className="bg-[#000040] rounded-[3rem] p-8 md:p-12 text-white flex flex-col lg:flex-row gap-12 shadow-2xl">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-none">{t.pathway.nextStart}</h3>
              <h3 className="text-4xl md:text-5xl font-black text-[#FFD700] leading-none mt-2">{t.pathway.dates}</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <Plane className="w-4 h-4" />
                  <span className="font-bold text-xs tracking-wider uppercase">{t.pathway.f1}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {t.pathway.months.split(', ').map((month, idx) => (
                    <div key={idx} className="px-6 py-2 rounded-full border border-white/20 bg-transparent text-sm font-medium transition-colors hover:bg-white/10 cursor-default">
                      {month}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <Ticket className="w-4 h-4" />
                  <span className="font-bold text-xs tracking-wider uppercase">{t.pathway.nonF1}</span>
                </div>
                <p className="text-xl font-bold mb-1">{t.pathway.monthly}</p>
                <p className="text-white/50 text-xs italic">{t.pathway.excluding}</p>
              </div>
            </div>

            <button className="bg-[#FFD700] text-black font-black px-8 py-4 rounded-full text-sm tracking-wider hover:bg-yellow-400 transition-colors hover:scale-105 active:scale-95 duration-200">
              {t.pathway.check}
            </button>
          </div>

          {/* Right Column - Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden flex-grow h-full">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Students studying" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-secondary rounded-3xl p-6 flex flex-col justify-center h-32 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <h4 className="text-primary font-black text-lg leading-tight">{t.pathway.applyEarly}</h4>
              </div>
              <div className="rounded-3xl overflow-hidden flex-grow">
                <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?auto=format&fit=crop&q=80" alt="City skyline" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
