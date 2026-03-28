import { useLanguage } from '../context/LanguageContext';

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

export function ApplicationForm() {
  const { t } = useLanguage();

  return (
    <section id="apply-now" className="relative py-24 overflow-hidden bg-primary flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          alt="Application form background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV-t6cGYc8pG-hT0pO3HG0ZZf4CSqHUdZoxaEWcG5a2vUwXXpLr27-pB3wR-ww1_rXEWO4IsZ7gLw0_3dkl_d8mF6QkwFjEDbRmSpVqFOncYJoZLFfkY-ozNvmg2UUocdMQKALy9OS_MmsT6wo17sep0y2vSpGnxnKCbuWcp4XlXt_8vYzq35nmZkZEAx2pyHvTG6N0usvA2rTADWXUZYlPrD5ySpVhA7qcBTgpEqkHWNkE7AKGuMQdVd2GY4z2Azjuvyf7CSmx84"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/80 to-primary/20"></div>
      </div>
      <div className="max-w-4xl mx-auto px-8 w-full relative z-10">
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-white/20">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              {t.form.title1} <span className="text-secondary">{t.form.title2}</span>
            </h3>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.form.desc}</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fName}</label>
                <input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder={t.form.fNamePlaceholder} type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fEmail}</label>
                <input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder={t.form.fEmailPlaceholder} type="email" />
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fPhone}</label>
                <div className="flex">
                  <select className="bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-slate-700 max-w-[120px]">
                    {countries.map((country, idx) => (
                      <option key={idx} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-r-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder={t.form.fPhonePlaceholder} type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fCountry}</label>
                <input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder={t.form.fCountryPlaceholder} type="text" />
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fVisa}</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-slate-700">
                  <option>{t.form.fVisaOpt1}</option>
                  <option>{t.form.fVisaOpt2}</option>
                  <option>{t.form.fVisaOpt3}</option>
                  <option>{t.form.fVisaOpt4}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t.form.fProg}</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-slate-700">
                  <option>{t.form.fProgOpt1}</option>
                  <option>{t.form.fProgOpt2}</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-primary mb-2">{t.form.fDate}</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none text-slate-700">
                <option>{t.form.fDateOpt1}</option>
                <option>{t.form.fDateOpt2}</option>
                <option>{t.form.fDateOpt3}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-primary mb-2">{t.form.fQuestion}</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none h-32" placeholder={t.form.fQuestionPlaceholder}></textarea>
            </div>
            
            <button className="w-full py-5 bg-[#FFB800] text-black rounded-xl font-bold text-lg hover:bg-[#F0AD00] transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]" type="submit">
              {t.form.fSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
