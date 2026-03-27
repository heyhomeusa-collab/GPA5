import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            {t.faq.title1} <span className="text-secondary">{t.faq.title2}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { q: t.faq.q1, a: t.faq.a1 },
            { q: t.faq.q2, a: t.faq.a2 },
            { q: t.faq.q3, a: t.faq.a3 },
            { q: t.faq.q4, a: t.faq.a4 },
            { q: t.faq.q5, a: t.faq.a5 },
            { q: t.faq.q6, a: t.faq.a6 }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all h-fit"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800 pr-4">{faq.q}</h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openFaq === index
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? 'max-h-[500px] opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
