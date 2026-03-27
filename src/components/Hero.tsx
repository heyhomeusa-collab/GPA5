import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  GraduationCap,
  Home,
  FileBadge,
  PlaneLanding,
  Globe
} from 'lucide-react';

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

export function Hero() {
  const { t } = useLanguage();
  const [activeHeroIcon, setActiveHeroIcon] = useState<number | null>(null);

  const scrollToSteps = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-primary min-h-[870px] flex items-center" id="about">
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
  );
}
