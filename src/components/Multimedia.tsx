import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

export function Multimedia() {
  const { t } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-primary tracking-tight mb-8">
            {t.multimedia.title}
          </h2>
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.multimedia.desc1}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.multimedia.desc2}
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform"></div>
          <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
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
              <>
                <img
                  className="w-full h-full object-cover opacity-80"
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
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white text-sm font-bold">
                  {t.benefits.watch}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
