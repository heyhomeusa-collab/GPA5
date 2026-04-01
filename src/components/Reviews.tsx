import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, GraduationCap } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: 'STUDENT' | 'ALUMNI';
  stat: string;
  text: string;
  textLong: string;
  img: string;
}

export function Reviews() {
  const { t } = useLanguage();
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);

  // Map translations to include images
  const reviewsData = (t.testimonials.reviews as any[] || []).map(r => ({
    ...r,
    img: `${import.meta.env.VITE_BLOB_BASE_URL}/pics/${r.id}.jpg`
  })) as Review[];

  const renderReviewItem = (review: Review, idx: number, row: number, duplicate: boolean = false) => {
    const keyId = `${duplicate ? 'dup-' : ''}r${row}-${idx}`;
    
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
            src={review.img}
            loading="lazy"
          />
          <div className="flex items-center gap-2 w-full">
            <span className="font-bold text-slate-900">{review.name}</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">{review.role}</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              {review.stat}
            </span>
          </div>
        </div>
        <p className="text-slate-500 text-sm whitespace-normal">
          "{review.text}"
        </p>

        {hoveredReview === keyId && (
          <div className="absolute top-[110%] left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 text-white p-6 rounded-3xl shadow-2xl z-[100] whitespace-normal">
            <div className="flex items-center mb-4 pb-4 border-b border-slate-700/50">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-3"
                  alt="Student"
                  src={review.img}
                  loading="lazy"
                />
              <div className="flex flex-col">
                <span className="font-bold text-white">{review.name}</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">{review.role}</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic leading-relaxed mb-4">"{review.textLong}"</p>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              This experience highlights the transformative impact of our programs. Through dedicated support and world-class resources, GPA continues to empower individuals worldwide to achieve their academic and professional goals, paving the way for lasting success.
            </p>
          </div>
        )}
      </div>
    );
  };

  const row1 = reviewsData.slice(0, 10);
  const row2 = reviewsData.slice(10, 20);

  return (
    <section className="bg-white relative z-20 group">
      
      {/* Marquee Container */}
      <div className="relative flex flex-col gap-2 w-full z-20">
        {/* Row 1 */}
        <div className={`relative flex ${hoveredReview?.includes('r1') ? 'z-50' : 'z-10'}`}>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
            {row1.map((review, idx) => renderReviewItem(review, idx, 1, false))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {row1.map((review, idx) => renderReviewItem(review, idx, 1, true))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={`relative flex ${hoveredReview?.includes('r2') ? 'z-50' : 'z-10'}`}>
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
            {row2.map((review, idx) => renderReviewItem(review, idx, 2, false))}
          </div>
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {row2.map((review, idx) => renderReviewItem(review, idx, 2, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
