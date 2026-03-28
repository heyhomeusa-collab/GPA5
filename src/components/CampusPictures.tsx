import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Building,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X,
  GraduationCap,
  FileBadge,
  Play
} from 'lucide-react';

export function CampusPictures() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const carouselImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Fg4RDlGgWfvya0TKjlfbdDagm4Jjk-QMarh3qZfaLbJCS1l3hUDBRnYZBmuV3v-cq5iK5_BRcT3hn_1ap8tqlgs7Pkp-xysCNg-ZP843j0f4lBfyMrVuUCj_6pd7ydLGelQOpoPvbpw2szOVroOpgYpFET9tEfGLrca7T5eRnbxJ-d8THkaGehBJad3Rc6URzgBMRKrrAaA6YRUzejHfA2IyUXFMFc1oZqpryXP-fa6sE7PWPoMebmBESDSVotFGim1jfjAqM_w",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
  ];

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when lightbox is open
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLightboxOpen, carouselImages.length]);

  return (
    <>
      <section className="py-24 bg-surface-container overflow-hidden" id="campus">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Main Title: Why GPA? */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              {t.campus.expTitle}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Intro Description Bubble */}
          <div className="mb-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden text-center shadow-sm">
              <div className="absolute -left-8 -top-8 text-primary/5 pointer-events-none">
                <Star fill="currentColor" className="w-[150px] h-[150px]" />
              </div>
              <div className="relative z-10">
                <p className="text-slate-600 text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
                  {t.campus.expDesc}
                </p>
              </div>
            </div>
          </div>

          {/* 4 VIP Stat Bubbles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {/* Bubble 1: VIP Onboarding */}
            <div className="bg-primary rounded-[2.5rem] p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all h-full">
              <div className="absolute -right-4 -bottom-4 text-white/5 pointer-events-none group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 mt-auto">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div className="mb-auto">
                  <h4 className="text-white font-bold text-lg leading-tight mb-3">
                    {t.campus.b1Title}
                  </h4>
                  <p className="text-white/80 text-[14px] leading-relaxed">
                    {t.campus.b1Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 2: Access to education */}
            <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 flex flex-col relative overflow-hidden group border border-slate-100 shadow-sm hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
              <div className="absolute -right-4 -bottom-4 text-primary/5 pointer-events-none group-hover:scale-110 transition-transform">
                <Building className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 mt-auto">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <div className="mb-auto">
                  <h4 className="text-primary font-bold text-lg leading-tight mb-3">
                    {t.campus.b2Title}
                  </h4>
                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    {t.campus.b2Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 3: Direct Path */}
            <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 flex flex-col relative overflow-hidden group border border-slate-100 shadow-sm hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
              <div className="absolute -right-4 -bottom-4 text-primary/5 pointer-events-none group-hover:scale-110 transition-transform">
                <GraduationCap className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 mt-auto">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div className="mb-auto">
                  <h4 className="text-primary font-bold text-lg leading-tight mb-3">
                    {t.campus.b3Title}
                  </h4>
                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    {t.campus.b3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 4: Exclusive partner */}
            <div className="bg-secondary rounded-[2.5rem] p-6 lg:p-8 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full">
              <div className="absolute -right-4 -bottom-4 text-primary/5 pointer-events-none group-hover:scale-110 transition-transform">
                <FileBadge className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 mt-auto">
                  <FileBadge className="w-7 h-7 text-primary" />
                </div>
                <div className="mb-auto">
                  <h4 className="text-primary font-bold text-lg leading-tight mb-3">
                    {t.campus.b4Title}
                  </h4>
                  <p className="text-primary/80 text-[14px] leading-relaxed">
                    {t.campus.b4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Title: Real American College */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
              {t.multimedia.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Glassy Unified Media Bubble */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-[3.5rem] p-8 lg:p-12 border border-white shadow-xl relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -z-10 transition-transform opacity-0 group-hover:opacity-100 duration-500"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              
              {/* Photo Gallery Column */}
              <div className="flex flex-col h-full min-h-[400px] lg:min-h-[500px]">
                <div className="flex justify-end items-center mb-4 px-2">
                  <div className="flex space-x-3">
                    <button 
                      onClick={handlePrevious}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div 
                  className="flex-1 rounded-[2.5rem] overflow-hidden relative cursor-pointer shadow-inner border border-slate-100"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Campus view"
                    src={carouselImages[currentImageIndex]}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"></div>
                </div>
              </div>

              {/* Video & Text Column */}
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-6 mb-8 lg:mb-10">
                  <p className="text-slate-600 text-2xl font-medium leading-relaxed">
                    {t.multimedia.desc1}
                  </p>
                  <p className="text-slate-600 text-2xl font-medium leading-relaxed">
                    {t.multimedia.desc2}
                  </p>
                </div>
                
                <div className="relative overflow-hidden rounded-[2.5rem] w-full aspect-video shadow-lg bg-slate-900 mx-auto border border-slate-100 mt-auto">
                  {isVideoPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`${videoUrl}?autoplay=1`}
                      title="Campus Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full group/video">
                      <img
                        className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover/video:scale-105"
                        alt="Group of diverse international students"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXdiz7OrzFtiR8cyqNGg3D8_sIHNBrTVLOV2BcSn-sHYEwRXLYpfRDVZAOmKMTF_Z2kT6M3XABhwCdd3l2ydSwM20yjWuWPi-iLOe5Cb-QhhPYI-XEZecI8g9dFnZXv_bWLi32w3qhch0pJHURzAukGFNGcQHxSn_FYJlssrAzgFRnq2SzcvgsJ8ZCw2aktPzUebvg_O1TTzBUJpV5ofmmyzfH7wopa_jLwMs66IRKCIaG_BZ3Kx7jVtmtz5hjSSjAiieT8VvMVRo"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setIsVideoPlaying(true)}
                          className="bg-secondary text-primary w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                        >
                          <Play className="w-10 h-10 fill-current ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white text-sm font-bold text-center border border-white/20">
                        {t.benefits.watch}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[#222]/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center text-white/70 z-10 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
            <span className="text-sm font-medium tracking-wide">
              {currentImageIndex + 1} / {carouselImages.length}
            </span>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
              className="p-2 hover:bg-white/10 hover:text-white rounded-full transition-colors pointer-events-auto"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-6xl px-20 h-[70vh] flex items-center justify-center">
            <img 
              src={carouselImages[currentImageIndex]} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain bg-white rounded-md shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Thumbnails */}
          <div className="absolute bottom-8 left-0 right-0 py-4 flex flex-col items-center gap-2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
            <div 
              className="flex flex-wrap justify-center gap-3 px-8 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {carouselImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                    currentImageIndex === idx 
                      ? 'ring-2 ring-white scale-105 opacity-100 shadow-xl' 
                      : 'opacity-50 hover:opacity-100 hover:scale-105 mix-blend-luminosity hover:mix-blend-normal'
                  }`}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover bg-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
