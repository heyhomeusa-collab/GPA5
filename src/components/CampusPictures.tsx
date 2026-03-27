import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Building,
  Building2,
  Bus,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Headphones,
  ShieldCheck,
} from 'lucide-react';

export function CampusPictures() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Fg4RDlGgWfvya0TKjlfbdDagm4Jjk-QMarh3qZfaLbJCS1l3hUDBRnYZBmuV3v-cq5iK5_BRcT3hn_1ap8tqlgs7Pkp-xysCNg-ZP843j0f4lBfyMrVuUCj_6pd7ydLGelQOpoPvbpw2szOVroOpgYpFET9tEfGLrca7T5eRnbxJ-d8THkaGehBJad3Rc6URzgBMRKrrAaA6YRUzejHfA2IyUXFMFc1oZqpryXP-fa6sE7PWPoMebmBESDSVotFGim1jfjAqM_w",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
          {t.campus.title1} <span className="text-secondary">{t.campus.title2}</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Full-Width Card */}
        <div className="mb-8">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group hover:border-primary/20 transition-all">
            <div className="absolute -right-8 -top-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
              <Building2 className="w-[200px] h-[200px]" />
            </div>
            <div className="relative z-10">
              <div className="bg-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-4">
                {t.campus.expTitle}
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed max-w-4xl">
                {t.campus.expDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
          {/* Photo Gallery (Left Side) */}
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex flex-col h-[400px] md:h-[500px]">
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="text-2xl font-black text-primary">{t.campus.photoGallery}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-all duration-500"
                alt="Campus view"
                src={carouselImages[currentImageIndex]}
              />
            </div>
          </div>

          {/* 2x2 Grid (Right Side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-primary rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square group hover:brightness-110 transition-all">
              <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="text-white font-bold text-xl leading-tight">
                {t.campus.vipOnboarding}
              </h4>
            </div>

            <div className="bg-white rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <Bus className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-primary font-bold text-xl leading-tight">
                {t.campus.airportPickup}
              </h4>
            </div>

            <div className="bg-secondary rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square group hover:brightness-105 transition-all">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-primary font-bold text-xl leading-tight">
                {t.campus.support247}
              </h4>
            </div>

            <div className="bg-secondary rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square group hover:brightness-105 transition-all">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-primary font-bold text-xl leading-tight">
                {t.campus.bankOpening}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
