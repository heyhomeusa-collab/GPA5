import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BLOB_BASE_URL } from '../constants';
import {
  Building,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X,
  GraduationCap,
  FileBadge,
  Play,
  Globe
} from 'lucide-react';

export function CampusPictures() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const carouselImages = Array.from({ length: 10 }, (_, i) => `${BLOB_BASE_URL}/pics/${i + 1}.jpg`);

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
      <section className="pt-4 pb-24 bg-surface-container overflow-hidden" id="campus">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Intro Description Bubble with Title Inside */}
          <div className="mb-12">
            <div className="bg-white/60 backdrop-blur-2xl rounded-[3.5rem] p-10 lg:p-14 border border-white relative overflow-hidden text-center shadow-xl group">
              {/* Animation Background */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -z-10 transition-transform opacity-0 group-hover:opacity-100 duration-500"></div>
              
              {/* Background Icons */}
              <div className="absolute -left-8 -top-8 text-primary/5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                <Globe className="w-[200px] h-[200px]" />
              </div>
              <div className="absolute -right-8 -bottom-8 text-primary/5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                <FileBadge className="w-[200px] h-[200px]" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-primary font-black text-4xl md:text-5xl mb-6">
                  {t.campus.expTitle}
                </h2>
                <div className="w-24 h-1.5 bg-secondary mb-8 rounded-full"></div>
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

          {/* Glassy Unified Media Bubble - Real American College */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-[3.5rem] p-10 lg:p-14 border border-white shadow-xl relative group overflow-hidden">
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -z-10 transition-transform opacity-0 group-hover:opacity-100 duration-500"></div>
            
            {/* Inner Title */}
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                {t.multimedia.title}
              </h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-16 relative z-10">
              
              {/* Tier 1: Intro Bubble + Static Photo Cluster */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <div className="bg-primary p-8 lg:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group/box hover:-translate-y-1 transition-all duration-500">
                    <div className="absolute -right-4 -bottom-4 text-white/5 pointer-events-none group-hover/box:scale-110 transition-transform">
                      <Building className="w-32 h-32" />
                    </div>
                    <p className="text-white text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                      {t.multimedia.desc2}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-7 relative h-[300px] md:h-[400px] flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    {/* Polaroid 1 */}
                    <div className="absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56 bg-white p-2 md:p-3 shadow-2xl rounded-sm -rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110 border border-slate-100">
                      <img src={`${BLOB_BASE_URL}/pics/1.jpg`} className="w-full h-full object-cover" alt="Campus Life" />
                    </div>
                    {/* Polaroid 2 */}
                    <div className="absolute top-10 right-0 w-48 h-48 md:w-56 md:h-56 bg-white p-2 md:p-3 shadow-2xl rounded-sm rotate-12 hover:rotate-0 hover:z-20 transition-all duration-500 translate-x-4 hover:scale-110 border border-slate-100">
                      <img src={`${BLOB_BASE_URL}/pics/2.jpg`} className="w-full h-full object-cover" alt="Student Meeting" />
                    </div>
                    {/* Polaroid 3 */}
                    <div className="absolute bottom-0 left-10 w-48 h-48 md:w-56 md:h-56 bg-white p-2 md:p-3 shadow-2xl rounded-sm 3 hover:rotate-0 hover:z-20 transition-all duration-500 -translate-x-8 translate-y-4 hover:scale-110 border border-slate-100">
                      <img src={`${BLOB_BASE_URL}/pics/3.jpg`} className="w-full h-full object-cover" alt="Classroom" />
                    </div>
                    {/* Polaroid 4 */}
                    <div className="absolute bottom-10 right-10 w-48 h-48 md:w-56 md:h-56 bg-white p-2 md:p-3 shadow-2xl rounded-sm -rotate-3 hover:rotate-0 hover:z-20 transition-all duration-500 translate-x-12 translate-y-8 hover:scale-110 border border-slate-100">
                      <img src={`${BLOB_BASE_URL}/pics/4.jpg`} className="w-full h-full object-cover" alt="Campus View" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier 2: Centered Full-Width Video */}
              <div className="w-full max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] w-full aspect-video shadow-2xl bg-slate-900 border-4 border-white group/video">
                  {isVideoPlaying ? (
                    <video className="w-full h-full object-cover" controls autoPlay playsInline loop preload="metadata">
                      <source src={`${BLOB_BASE_URL}/vid/promo-video.mp4`} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover/video:scale-105"
                        alt="Video Preview"
                        src={`${BLOB_BASE_URL}/pics/6.jpg`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setIsVideoPlaying(true)}
                          className="bg-secondary text-primary w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl group/btn"
                        >
                          <Play className="w-12 h-12 fill-current ml-1 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center">
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white text-lg font-black border border-white/20">
                          {t.benefits.watch}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tier 3: Carousel + Stacked Text Bubbles */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                {/* Image Carousel (60%) */}
                <div className="lg:col-span-7 flex flex-col h-full min-h-[400px]">
                  <div className="flex justify-between items-center mb-6 px-4">
                    <h3 className="text-primary font-black text-2xl uppercase tracking-tighter">Explore Campus</h3>
                    <div className="flex space-x-3">
                      <button onClick={handlePrevious} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"><ChevronLeft className="w-6 h-6" /></button>
                      <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"><ChevronRight className="w-6 h-6" /></button>
                    </div>
                  </div>
                  <div 
                    className="flex-1 rounded-[3rem] overflow-hidden relative cursor-pointer shadow-xl border-4 border-white transition-transform hover:scale-[1.01] duration-500"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <img className="absolute inset-0 w-full h-full object-cover" alt="Campus view" src={carouselImages[currentImageIndex]} />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Stacked Bubbles (40%) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {/* Bubble 1: Primary Dark */}
                  <div className="bg-primary p-8 rounded-[2.5rem] shadow-xl flex-1 flex items-center">
                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                      {t.multimedia.desc1}
                    </p>
                  </div>
                  
                  {/* Bubble 2: White/Secondary Glass */}
                  <div className="bg-white/80 p-8 rounded-[2.5rem] shadow-xl flex-1 border border-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary">
                        <Building className="w-6 h-6" />
                      </div>
                      <h4 className="text-primary font-black text-xl leading-tight">{t.campus.b2Title}</h4>
                    </div>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                      {t.campus.b2Desc}
                    </p>
                  </div>
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
