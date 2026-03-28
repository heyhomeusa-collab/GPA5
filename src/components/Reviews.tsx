import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, GraduationCap } from 'lucide-react';

export function Reviews() {
  const { t } = useLanguage();
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);

  const getReviewContent = (item: number) => {
    return {
      name: item === 1 ? "AbadCrypto" : item === 2 ? "Sol Martin" : "Aleix Farnós",
      role: item === 1 ? "YOUTUBER" : item === 2 ? "CREADORA" : "YOUTUBER",
      stat: item === 1 ? "76.3K Subs" : item === 2 ? "+80K Views" : "+20 Canales",
      text: item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3,
      textLong: item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long,
      img: item === 1 
        ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE"
        : item === 2 
        ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040"
        : "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
    };
  };

  const getReviewContentRow2 = (item: number) => {
    return {
      name: item === 1 ? "Agustín Fernandez" : item === 2 ? "Maria Garcia" : "David Chen",
      role: item === 1 ? "CREADOR" : item === 2 ? "ALUMNI" : "STUDENT",
      stat: item === 1 ? "$3.300/mes" : item === 2 ? "Top 1%" : "Honors",
      text: item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3,
      textLong: item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long,
      img: getReviewContent(item).img
    };
  };

  const renderReviewItem = (item: number, idx: number, row: number, duplicate: boolean = false) => {
    const keyId = `${duplicate ? 'dup-' : ''}r${row}-${idx}`;
    const content = row === 1 ? getReviewContent(item) : getReviewContentRow2(item);
    
    return (
      <div 
        key={keyId} 
        className="relative inline-flex flex-col bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[400px] cursor-pointer"
        onMouseEnter={() => setHoveredReview(keyId)}
        onMouseLeave={() => setHoveredReview(null)}
      >
        <div className="flex items-center mb-3">
          <img
            className="w-12 h-12 rounded-full object-cover mr-3"
            alt="Student"
            src={content.img}
          />
          <div className="flex items-center gap-2 w-full">
            <span className="font-bold text-slate-900">{content.name}</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">{content.role}</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              {content.stat}
            </span>
          </div>
        </div>
        <p className="text-slate-500 text-sm whitespace-normal">
          "{content.text}"
        </p>

        {hoveredReview === keyId && (
          <div className="absolute top-[110%] left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 text-white p-6 rounded-3xl shadow-2xl z-[100] whitespace-normal">
            <div className="flex items-center mb-4 pb-4 border-b border-slate-700/50">
              <img
                className="w-12 h-12 rounded-full object-cover mr-3"
                alt="Student"
                src={content.img}
              />
              <div className="flex flex-col">
                <span className="font-bold text-white">{content.name}</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">{content.role}</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic leading-relaxed mb-4">"{content.textLong}"</p>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              This experience highlights the transformative impact of our programs. Through dedicated support and world-class resources, GPA continues to empower individuals worldwide to achieve their academic and professional goals, paving the way for lasting success.
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-12 bg-surface relative z-20 -mt-10 rounded-t-[3rem] group">
      <div className="absolute -right-8 -top-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
        <GraduationCap className="w-[200px] h-[200px]" />
      </div>
      <div className="max-w-7xl mx-auto px-8 mb-12 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary flex items-center justify-center">
          {t.testimonials.meet}
        </h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 w-full z-20">
        {/* Row 1 */}
        <div className={`relative flex ${hoveredReview?.includes('r1') ? 'z-50' : 'z-10'}`}>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
            {[1, 2, 3, 1, 2, 3].map((item, idx) => renderReviewItem(item, idx, 1, false))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {[1, 2, 3, 1, 2, 3].map((item, idx) => renderReviewItem(item, idx, 1, true))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={`relative flex ${hoveredReview?.includes('r2') ? 'z-50' : 'z-10'}`}>
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
            {[3, 1, 2, 3, 1, 2].map((item, idx) => renderReviewItem(item, idx, 2, false))}
          </div>
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {[3, 1, 2, 3, 1, 2].map((item, idx) => renderReviewItem(item, idx, 2, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
