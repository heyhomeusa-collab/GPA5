import {
  BarChart2,
  Building,
  Building2,
  Bus,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Dumbbell,
  FileBadge,
  FileText,
  Globe,
  GraduationCap,
  Headphones,
  Home,
  MessageCircle,
  MessageSquare,
  Plane,
  PlaneLanding,
  Play,
  School,
  ShieldCheck,
  Star,
  Ticket,
  Video,
} from 'lucide-react';
import { useState } from 'react';
import { translations } from './translations';

const countries = [
  // Americas
  { code: "+1", flag: "🇺🇸", name: "US/Canada" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  // Europe
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+420", flag: "🇨🇿", name: "Czechia" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  // Asia
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  // Oceania
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+677", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'PT' | 'TR'>('EN');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeHeroIcon, setActiveHeroIcon] = useState<number | null>(null);
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);

  const t = translations[currentLang];

  const carouselImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Fg4RDlGgWfvya0TKjlfbdDagm4Jjk-QMarh3qZfaLbJCS1l3hUDBRnYZBmuV3v-cq5iK5_BRcT3hn_1ap8tqlgs7Pkp-xysCNg-ZP843j0f4lBfyMrVuUCj_6pd7ydLGelQOpoPvbpw2szOVroOpgYpFET9tEfGLrca7T5eRnbxJ-d8THkaGehBJad3Rc6URzgBMRKrrAaA6YRUzejHfA2IyUXFMFc1oZqpryXP-fa6sE7PWPoMebmBESDSVotFGim1jfjAqM_w",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
  ];

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const scrollToSteps = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
                {t.hero.partner}
              </span>
              <h1 className="text-white font-black text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6">
                {t.hero.title1} <br />
                <span className="text-secondary">{t.hero.title2}</span> {t.hero.title3}
              </h1>
              <p className="text-white/90 text-xl font-medium mb-8">
                {t.hero.subtitle}
              </p>

              <button 
                onClick={scrollToSteps}
                className="bg-secondary text-primary px-8 py-4 rounded-2xl font-black text-lg hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg shadow-secondary/20 mb-12"
              >
                {t.hero.getStarted}
              </button>

              {/* Interactive Icons */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <GraduationCap className="w-5 h-5" />, label: t.hero.iconAcademic },
                  { icon: <Home className="w-5 h-5" />, label: t.hero.iconHousing },
                  { icon: <FileBadge className="w-5 h-5" />, label: t.hero.iconVisa },
                  { icon: <PlaneLanding className="w-5 h-5" />, label: t.hero.iconArrival },
                  { icon: <Globe className="w-5 h-5" />, label: t.hero.iconCommunity }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative cursor-pointer"
                    onClick={() => setActiveHeroIcon(activeHeroIcon === idx ? null : idx)}
                  >
                    <div className={`bg-white/15 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg transition-all ${activeHeroIcon === idx ? 'bg-secondary text-primary' : 'text-white hover:bg-white/25'}`}>
                      {item.icon}
                    </div>
                    {activeHeroIcon === idx && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white text-slate-800 text-sm font-medium p-3 rounded-xl shadow-xl z-20">
                        {item.label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Bubble */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl relative z-20 hidden lg:block" id="form-section">
              <h3 className="text-3xl font-black text-primary mb-2 text-center">{t.form.title1} {t.form.title2}</h3>
              <p className="text-slate-500 text-sm mb-6 text-center">{t.form.desc}</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fName}</label>
                    <input className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder={t.form.fNamePlaceholder} type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fEmail}</label>
                    <input className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder={t.form.fEmailPlaceholder} type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fPhone}</label>
                    <div className="flex">
                      <select className="bg-white border border-slate-200 border-r-0 rounded-l-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700 text-sm max-w-[100px]">
                        {countries.map((country, idx) => (
                          <option key={idx} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input className="w-full bg-white border border-slate-200 rounded-r-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder={t.form.fPhonePlaceholder} type="tel" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fCountry}</label>
                    <input className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder={t.form.fCountryPlaceholder} type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fVisa}</label>
                    <select className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700 text-sm">
                      <option>{t.form.fVisaOpt1}</option>
                      <option>{t.form.fVisaOpt2}</option>
                      <option>{t.form.fVisaOpt3}</option>
                      <option>{t.form.fVisaOpt4}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">{t.form.fProg}</label>
                    <select className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700 text-sm">
                      <option>{t.form.fProgOpt1}</option>
                      <option>{t.form.fProgOpt2}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">{t.form.fDate}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700 text-sm">
                    <option>{t.form.fDateOpt1}</option>
                    <option>{t.form.fDateOpt2}</option>
                    <option>{t.form.fDateOpt3}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">{t.form.fQuestion}</label>
                  <textarea className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm resize-none h-24" placeholder={t.form.fQuestionPlaceholder}></textarea>
                </div>
                <button className="w-full py-4 bg-[#FFB800] text-black rounded-lg font-bold text-base hover:bg-[#F0AD00] transition-all mt-4" type="submit">
                  {t.form.fSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>


      
      {/* Reviews Section */}
      <section className="py-12 bg-surface overflow-hidden relative z-20 -mt-10 rounded-t-[3rem] group">
        <div className="absolute -right-8 -top-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
          <GraduationCap className="w-[200px] h-[200px]" />
        </div>
        <div className="max-w-7xl mx-auto px-8 mb-8 flex items-center justify-between relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-primary flex items-center">
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mr-4 text-secondary" />
            {t.testimonials.meet}
          </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex flex-col gap-6 overflow-x-hidden group">
          {/* Row 1 */}
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
              {[1, 2, 3, 1, 2, 3].map((item, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="relative inline-flex flex-col bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[400px] cursor-pointer"
                  onMouseEnter={() => setHoveredReview(`r1-${idx}`)}
                  onMouseLeave={() => setHoveredReview(null)}
                >
                  <div className="flex items-center mb-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      alt="Student"
                      src={
                        item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                        item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                      }
                    />
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-bold text-slate-900">{item === 1 ? "AbadCrypto" : item === 2 ? "Sol Martin" : "Aleix Farnós"}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "YOUTUBER" : item === 2 ? "CREADORA" : "YOUTUBER"}</span>
                      <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        {item === 1 ? "76.3K Subs" : item === 2 ? "+80K Views" : "+20 Canales"}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>

                  {/* Hover Bubble */}
                  {hoveredReview === `r1-${idx}` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[400px] bg-[#0f172a] text-white p-6 rounded-3xl shadow-2xl z-30 whitespace-normal">
                      <div className="flex items-center mb-4 pb-4 border-b border-slate-700">
                        <img
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          alt="Student"
                          src={
                            item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                            item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                          }
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{item === 1 ? "AbadCrypto" : item === 2 ? "Sol Martin" : "Aleix Farnós"}</span>
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "YOUTUBER" : item === 2 ? "CREADORA" : "YOUTUBER"}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 italic leading-relaxed">"{item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long}"</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0f172a]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[1, 2, 3, 1, 2, 3].map((item, idx) => (
                <div 
                  key={`dup-r1-${idx}`} 
                  className="relative inline-flex flex-col bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[400px] cursor-pointer"
                  onMouseEnter={() => setHoveredReview(`dup-r1-${idx}`)}
                  onMouseLeave={() => setHoveredReview(null)}
                >
                  <div className="flex items-center mb-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      alt="Student"
                      src={
                        item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                        item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                      }
                    />
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-bold text-slate-900">{item === 1 ? "AbadCrypto" : item === 2 ? "Sol Martin" : "Aleix Farnós"}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "YOUTUBER" : item === 2 ? "CREADORA" : "YOUTUBER"}</span>
                      <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        {item === 1 ? "76.3K Subs" : item === 2 ? "+80K Views" : "+20 Canales"}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>

                  {/* Hover Bubble */}
                  {hoveredReview === `dup-r1-${idx}` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[400px] bg-[#0f172a] text-white p-6 rounded-3xl shadow-2xl z-30 whitespace-normal">
                      <div className="flex items-center mb-4 pb-4 border-b border-slate-700">
                        <img
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          alt="Student"
                          src={
                            item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                            item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                          }
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{item === 1 ? "AbadCrypto" : item === 2 ? "Sol Martin" : "Aleix Farnós"}</span>
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "YOUTUBER" : item === 2 ? "CREADORA" : "YOUTUBER"}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 italic leading-relaxed">"{item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long}"</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0f172a]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
              {[3, 1, 2, 3, 1, 2].map((item, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="relative inline-flex flex-col bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[400px] cursor-pointer"
                  onMouseEnter={() => setHoveredReview(`r2-${idx}`)}
                  onMouseLeave={() => setHoveredReview(null)}
                >
                  <div className="flex items-center mb-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      alt="Student"
                      src={
                        item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                        item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                      }
                    />
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-bold text-slate-900">{item === 1 ? "Agustín Fernandez" : item === 2 ? "Maria Garcia" : "David Chen"}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "CREADOR" : item === 2 ? "ALUMNI" : "STUDENT"}</span>
                      <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        {item === 1 ? "$3.300/mes" : item === 2 ? "Top 1%" : "Honors"}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>

                  {/* Hover Bubble */}
                  {hoveredReview === `r2-${idx}` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[400px] bg-[#0f172a] text-white p-6 rounded-3xl shadow-2xl z-30 whitespace-normal">
                      <div className="flex items-center mb-4 pb-4 border-b border-slate-700">
                        <img
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          alt="Student"
                          src={
                            item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                            item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                          }
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{item === 1 ? "Agustín Fernandez" : item === 2 ? "Maria Garcia" : "David Chen"}</span>
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "CREADOR" : item === 2 ? "ALUMNI" : "STUDENT"}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 italic leading-relaxed">"{item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long}"</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0f172a]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 py-4 absolute top-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[3, 1, 2, 3, 1, 2].map((item, idx) => (
                <div 
                  key={`dup-r2-${idx}`} 
                  className="relative inline-flex flex-col bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[400px] cursor-pointer"
                  onMouseEnter={() => setHoveredReview(`dup-r2-${idx}`)}
                  onMouseLeave={() => setHoveredReview(null)}
                >
                  <div className="flex items-center mb-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      alt="Student"
                      src={
                        item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                        item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                      }
                    />
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-bold text-slate-900">{item === 1 ? "Agustín Fernandez" : item === 2 ? "Maria Garcia" : "David Chen"}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "CREADOR" : item === 2 ? "ALUMNI" : "STUDENT"}</span>
                      <span className="text-xs font-bold text-emerald-500 flex items-center ml-auto">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        {item === 1 ? "$3.300/mes" : item === 2 ? "Top 1%" : "Honors"}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>

                  {/* Hover Bubble */}
                  {hoveredReview === `dup-r2-${idx}` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[400px] bg-[#0f172a] text-white p-6 rounded-3xl shadow-2xl z-30 whitespace-normal">
                      <div className="flex items-center mb-4 pb-4 border-b border-slate-700">
                        <img
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          alt="Student"
                          src={
                            item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                            item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                          }
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{item === 1 ? "Agustín Fernandez" : item === 2 ? "Maria Garcia" : "David Chen"}</span>
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">{item === 1 ? "CREADOR" : item === 2 ? "ALUMNI" : "STUDENT"}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 italic leading-relaxed">"{item === 1 ? t.testimonials.t1Long : item === 2 ? t.testimonials.t2Long : t.testimonials.t3Long}"</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0f172a]"></div>
                    </div>
                  )}
                </div>
              ))}
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
              {/* VIP Onboarding */}
              <div className="bg-primary rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square group hover:brightness-110 transition-all">
                <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="text-white font-bold text-xl leading-tight">
                  {t.campus.vipOnboarding}
                </h4>
              </div>

              {/* Airport Pickup */}
              <div className="bg-white rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-primary font-bold text-xl leading-tight">
                  {t.campus.airportPickup}
                </h4>
              </div>

              {/* 24/7 Support */}
              <div className="bg-secondary rounded-[2.5rem] p-6 flex flex-col justify-between aspect-square group hover:brightness-105 transition-all">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-primary font-bold text-xl leading-tight">
                  {t.campus.support247}
                </h4>
              </div>

              {/* Bank Opening */}
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

      {/* Multimedia Section */}
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

      
      {/* Academic Pathway Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tight">{t.pathway.title}</h2>
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


      
      {/* FAQ Section */}
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