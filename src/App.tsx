import {
  BarChart2,
  Building,
  Building2,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  FileBadge,
  FileText,
  Globe,
  GraduationCap,
  Home,
  MessageCircle,
  MessageSquare,
  PlaneLanding,
  Play,
  School,
  Star,
  Video,
} from 'lucide-react';
import { useState } from 'react';
import { translations } from './translations';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'PT' | 'TR'>('EN');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const t = translations[currentLang];

  const carouselImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Fg4RDlGgWfvya0TKjlfbdDagm4Jjk-QMarh3qZfaLbJCS1l3hUDBRnYZBmuV3v-cq5iK5_BRcT3hn_1ap8tqlgs7Pkp-xysCNg-ZP843j0f4lBfyMrVuUCj_6pd7ydLGelQOpoPvbpw2szOVroOpgYpFET9tEfGLrca7T5eRnbxJ-d8THkaGehBJad3Rc6URzgBMRKrrAaA6YRUzejHfA2IyUXFMFc1oZqpryXP-fa6sE7PWPoMebmBESDSVotFGim1jfjAqM_w",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
  ];

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      {/* TopNavBar */}
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

      {/* Hero Section */}
      <header
        className="relative pt-32 pb-20 overflow-hidden bg-primary min-h-[870px] flex items-center"
        id="about"
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="Stunning Orlando skyline at sunset"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV-t6cGYc8pG-hT0pO3HG0ZZf4CSqHUdZoxaEWcG5a2vUwXXpLr27-pB3wR-ww1_rXEWO4IsZ7gLw0_3dkl_d8mF6QkwFjEDbRmSpVqFOncYJoZLFfkY-ozNvmg2UUocdMQKALy9OS_MmsT6wo17sep0y2vSpGnxnKCbuWcp4XlXt_8vYzq35nmZkZEAx2pyHvTG6N0usvA2rTADWXUZYlPrD5ySpVhA7qcBTgpEqkHWNkE7AKGuMQdVd2GY4z2Azjuvyf7CSmx84"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-5xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
              {t.hero.partner}
            </span>
            <h1 className="text-white font-black text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              {t.hero.title1} <br />
              <span className="text-secondary">{t.hero.title2}</span> {t.hero.title3}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mb-12">
              {t.hero.subtitle}
            </p>

            {/* Bubble Process Icons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <div className="bg-secondary p-1.5 rounded-full text-primary flex items-center justify-center">
                  <FileBadge className="w-4 h-4" />
                </div>
                <span className="text-white font-bold text-sm">
                  {t.hero.visa}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <div className="bg-secondary p-1.5 rounded-full text-primary flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-white font-bold text-sm">
                  {t.hero.application}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <div className="bg-secondary p-1.5 rounded-full text-primary flex items-center justify-center">
                  <PlaneLanding className="w-4 h-4" />
                </div>
                <span className="text-white font-bold text-sm">
                  {t.hero.arrival}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <div className="bg-secondary p-1.5 rounded-full text-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-white font-bold text-sm">
                  {t.hero.multilingual}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-12 bg-surface overflow-hidden relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Testimonial Item 1 */}
            <div className="flex items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 bento-card">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                alt="Ana Silva"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="font-bold text-primary mr-2">Ana Silva</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Brazil
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{t.testimonials.t1}"
                </p>
              </div>
            </div>

            {/* Testimonial Item 2 */}
            <div className="flex items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 bento-card">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                alt="Mateo Gomez"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdJYHqjLSW6C7jmZFqx44j1jy1BZE0VJEKrCMbgauU3BfOnASRxAxjyXKuFndyBwri_S1i2nACgzsOJCfBwdU8UpD9ckOAQqpyt31OOHjQcex_Z9BV5F0isbyxecgBtVNj2WAX0GH6gLFBK-XqUf_o12YRrcqmi0GIr8eXpZMKrK4o8hLvfbM9XTPI0BokKr3onNIS64nildxkpmmMH3nBTUsgFxWlMnq4u6vVZrF14wx8GkN68GQqa5eAvLk4QreQ0oxlZotnP-o"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="font-bold text-primary mr-2">Mateo Gomez</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Colombia
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{t.testimonials.t2}"
                </p>
              </div>
            </div>

            {/* Testimonial Item 3 */}
            <div className="flex items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 bento-card">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                alt="Elif Demir"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0lsFRIQv10NycaDGTduh2sf6wEeCYj5vKMSKlqpKA0t907LxNVndMG7Fe-sVaxfAD8SDpTP8KVtbxVc8eHv4R38SBHFO9xD8iikrAqEwPgrLo1RnUbC8F0Eh_jwcM5yqYqnusKwOhRvjhArLyBqdSshDGaMh4nXbEZuuCP1hQ6CU6IGTzC2XOCcf5Uayb2IFMQqnbNWkkCXtYbVWXf9-RdhJWeJpSj1siSPxOu-9q1kPa_apfbGLNuZ9CSW7kTrDDdij7KwTu0Qw"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="font-bold text-primary mr-2">Elif Demir</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Turkey
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{t.testimonials.t3}"
                </p>
              </div>
            </div>

            {/* Testimonial Item 4 (Gallery Entry) */}
            <div className="flex items-center justify-center bg-secondary p-6 rounded-2xl shadow-sm border border-secondary cursor-pointer hover:bg-secondary/90 transition-all bento-card relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <GraduationCap className="w-24 h-24" />
              </div>
              <div className="text-center relative z-10">
                <h4 className="font-black text-primary text-xl uppercase tracking-tighter">
                  {t.testimonials.meet}
                </h4>
                <p className="text-xs font-bold text-primary/70 mt-1">
                  {t.testimonials.gallery}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Pictures Section */}
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
              <div className="absolute -right-8 -top-8 text-primary/5 group-hover:text-primary/10 transition-colors">
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

          {/* Side-by-Side Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Slider Column */}
            <div className="relative group h-[400px] md:h-[500px]">
              <div className="w-full h-full bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-slate-50">
                <img
                  className="w-full h-full object-cover transition-all duration-500"
                  alt="Campus view"
                  src={carouselImages[currentImageIndex]}
                />
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                    className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                    className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/40 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-8 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl text-white font-bold text-xl">
                  {currentImageIndex + 1} / {carouselImages.length}
                </div>
              </div>
            </div>

            {/* VIP Onboarding Card */}
            <div className="bg-primary p-10 rounded-[2.5rem] group hover:brightness-110 transition-all relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-white/10 transition-colors">
                <Star className="w-[200px] h-[200px] fill-current" />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                  {t.campus.vipTitle}
                </h3>
                <p className="text-white/80 text-lg mb-10">
                  {t.campus.vipDesc}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBsbxvR8AGwyFQO0-Aa6VW0qxUcke91HpuDkB-aYaf9E_QBMj4W7_wi7-NPTxLfxey6IQA__sYgaW3gAsbza9qH6PZXDqDeQ0AZWiD7zzEbyEA9DYAR9SWFlLqdvjSJxjwS5IWBEjrofTbEh1Kqv0ZuhgcaW1ZeXPBHM0tQZEJvxr1AIasQ13G-V931TqggLpibZY5wYZ2LQ39EM7f6iA8XF8KKbZjx8syXYFbeAYEROWVCn2jch9Khx3GZEzdN2W89YYzSRLmf-s"
                      alt="Student"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuByHTQIvrujfHihezw_0YiHFD3iOzEABWb2Om5UxuPMlU8B4B2O-K0JpFS1zx1m5GtFWRruxROToFmyhGXpPcYTA9a_xlvnFn7Z-ygZLzU5iZv-KO8U6EHkFnNJ9tuBWA4o32OJwNNME9DsllGeBiJMdlZerZup3KrAbw82bSi-zj8CvfJH8ZHN6WnzC-x-6_l-b61rLVDhHiW-tOS7vZEj5k3A67j43tgvt29u1fNgrkScZ9vZUJFAkuNEUx71IY0ny1iIEbDdIWI"
                      alt="Student"
                    />
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white border-2 border-primary">
                      +500
                    </div>
                  </div>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider">
                    {t.campus.studentsSupported}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unmatched Campus Benefits */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-8">
              {t.benefits.title.split(' ').slice(0, 2).join(' ')} <br />
              {t.benefits.title.split(' ').slice(2).join(' ')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary text-white p-3 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-all">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">
                    {t.benefits.b1Title}
                  </h4>
                  <p className="text-slate-600">
                    {t.benefits.b1Desc}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary text-white p-3 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">
                    {t.benefits.b2Title}
                  </h4>
                  <p className="text-slate-600">
                    {t.benefits.b2Desc}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary text-white p-3 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-all">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">
                    {t.benefits.b3Title}
                  </h4>
                  <p className="text-slate-600">
                    {t.benefits.b3Desc}
                  </p>
                </div>
              </div>
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

      {/* Step-by-Step Section */}
      <section className="py-32 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-primary tracking-tight">
              {t.process.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-100 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
                01
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-black text-2xl text-primary mb-3">
                  {t.process.s1Title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {t.process.s1Desc}
                </p>
              </div>
            </div>
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-100 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
                02
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-black text-2xl text-primary mb-3">
                  {t.process.s2Title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {t.process.s2Desc}
                </p>
              </div>
            </div>
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-100 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
                03
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-black text-2xl text-primary mb-3">
                  {t.process.s3Title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {t.process.s3Desc}
                </p>
              </div>
            </div>
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-100 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
                04
              </span>
              <div className="relative z-10 pt-4">
                <h4 className="font-black text-2xl text-primary mb-3">
                  {t.process.s4Title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {t.process.s4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-24 bg-surface-container" id="programs">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-primary tracking-tight text-center mb-16">
            {t.programs.title}
          </h2>
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
                </ul>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform">
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
                </ul>
              </div>
              <button className="w-full py-4 bg-secondary text-primary rounded-2xl font-bold hover:scale-[1.02] transition-transform relative z-10">
                {t.programs.p2Btn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-black text-primary tracking-tight text-center mb-16">
            {t.faq.title1} <span className="text-secondary">{t.faq.title2}</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: t.faq.q1,
                a: t.faq.a1,
              },
              {
                q: t.faq.q2,
                a: t.faq.a2,
              },
              {
                q: t.faq.q3,
                a: t.faq.a3,
              },
              {
                q: t.faq.q4,
                a: t.faq.a4,
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl border border-slate-100 p-6 cursor-pointer transition-all hover:border-primary/20"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-bold text-primary">{faq.q}</h5>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
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

      {/* Side Form / CTA Section */}
      <section id="form-section" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              {t.form.title1} <br />
              <span className="text-secondary underline underline-offset-8">
                {t.form.title2}
              </span>
            </h2>
            <p className="text-white/80 text-xl mb-12">
              {t.form.desc}
            </p>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex -space-x-3">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    alt="Admissions counselor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBsbxvR8AGwyFQO0-Aa6VW0qxUcke91HpuDkB-aYaf9E_QBMj4W7_wi7-NPTxLfxey6IQA__sYgaW3gAsbza9qH6PZXDqDeQ0AZWiD7zzEbyEA9DYAR9SWFlLqdvjSJxjwS5IWBEjrofTbEh1Kqv0ZuhgcaW1ZeXPBHM0tQZEJvxr1AIasQ13G-V931TqggLpibZY5wYZ2LQ39EM7f6iA8XF8KKbZjx8syXYFbeAYEROWVCn2jch9Khx3GZEzdN2W89YYzSRLmf-s"
                  />
                  <img
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    alt="Student support staff"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuByHTQIvrujfHihezw_0YiHFD3iOzEABWb2Om5UxuPMlU8B4B2O-K0JpFS1zx1m5GtFWRruxROToFmyhGXpPcYTA9a_xlvnFn7Z-ygZLzU5iZv-KO8U6EHkFnNJ9tuBWA4o32OJwNNME9DsllGeBiJMdlZerZup3KrAbw82bSi-zj8CvfJH8ZHN6WnzC-x-6_l-b61rLVDhHiW-tOS7vZEj5k3A67j43tgvt29u1fNgrkScZ9vZUJFAkuNEUx71IY0ny1iIEbDdIWI"
                  />
                  <img
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    alt="International student advisor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                  />
                </div>
                <p className="text-white font-bold">
                  {t.form.assisted}
                </p>
              </div>
              <button className="bg-secondary text-primary w-full py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                {t.form.btn}
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fName}
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fEmail}
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fPhone}
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                    placeholder="+1..."
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fCountry}
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                    placeholder="Your Country"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fVisa}
                  </label>
                  <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700">
                    <option>{t.form.fVisaOpt1}</option>
                    <option>{t.form.fVisaOpt2}</option>
                    <option>{t.form.fVisaOpt3}</option>
                    <option>{t.form.fVisaOpt4}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    {t.form.fProg}
                  </label>
                  <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700">
                    <option>{t.form.fProgOpt1}</option>
                    <option>{t.form.fProgOpt2}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  {t.form.fDate}
                </label>
                <input
                  className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700"
                  type="month"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  {t.form.fQuestion}
                </label>
                <textarea
                  className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="How can we help?"
                  rows={3}
                ></textarea>
              </div>
              <button
                className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:opacity-90 transition-all"
                type="submit"
              >
                {t.form.fSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-16 pb-8 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div>
            <div className="text-xl font-black text-primary mb-6">GPA</div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4 mt-8">
              <BarChart2 className="w-6 h-6 text-primary cursor-pointer hover:text-secondary transition-colors" />
              <Camera className="w-6 h-6 text-primary cursor-pointer hover:text-secondary transition-colors" />
              <Video className="w-6 h-6 text-primary cursor-pointer hover:text-secondary transition-colors" />
            </div>
          </div>
          <div>
            <h6 className="font-black text-primary mb-6">{t.footer.explore}</h6>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.e1}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.e2}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.e3}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-black text-primary mb-6">{t.footer.admissions}</h6>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.a1}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.a2}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.a3}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-black text-primary mb-6">{t.footer.support}</h6>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.s1}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.s2}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-slate-500 hover:text-primary hover:underline transition-all"
                  href="#"
                >
                  {t.footer.s3}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 text-center">
            {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* BottomNavBar (FAB Support) */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center whatsapp-btn group">
        <div className="whatsapp-tooltip mr-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100">
          <p className="text-xs font-bold text-primary">
            {t.footer.whatsapp}
          </p>
        </div>
        <button className="bg-[#25D366] text-white rounded-full p-4 flex items-center justify-center shadow-2xl shadow-primary/20 hover:scale-110 hover:rotate-3 transition-all duration-300">
          <MessageCircle className="w-8 h-8 fill-current" />
        </button>
      </div>
    </div>
  );
}