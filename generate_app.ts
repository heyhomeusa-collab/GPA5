import fs from 'fs';

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add new state variables for Hero icons and Reviews hover
appContent = appContent.replace(
  /const \[isVideoPlaying, setIsVideoPlaying\] = useState\(false\);/,
  `const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeHeroIcon, setActiveHeroIcon] = useState<number | null>(null);
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);`
);

// 2. Add scrollToSteps function
appContent = appContent.replace(
  /const scrollToForm = \(\) => \{/,
  `const scrollToSteps = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {`
);

// 3. Update Hero Section
const newHero = `
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
                    <div className={\`bg-white/15 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg transition-all \${activeHeroIcon === idx ? 'bg-secondary text-primary' : 'text-white hover:bg-white/25'}\`}>
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
              <h3 className="text-2xl font-black text-primary mb-2">{t.form.title1} <span className="text-secondary">{t.form.title2}</span></h3>
              <p className="text-slate-500 text-sm mb-6">{t.form.desc}</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.form.fName}</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.form.fEmail}</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.form.fPhone}</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-sm" placeholder="+1..." type="tel" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.form.fVisa}</label>
                    <select className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-700 text-sm">
                      <option>{t.form.fVisaOpt1}</option>
                      <option>{t.form.fVisaOpt2}</option>
                      <option>{t.form.fVisaOpt3}</option>
                      <option>{t.form.fVisaOpt4}</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-base hover:opacity-90 transition-all mt-2" type="submit">
                  {t.form.fSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
`;

appContent = appContent.replace(/\{\/\* Hero Section \*\/\}[\s\S]*?<\/header>/, newHero);

// 4. Update Reviews Section (Dynamic Marquee)
const newReviews = `
      {/* Reviews Section */}
      <section className="py-12 bg-surface overflow-hidden relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-8 mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black text-primary flex items-center">
            <MessageCircle className="w-8 h-8 mr-3 text-secondary" />
            {t.testimonials.meet}
          </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused]">
            {[1, 2, 3, 1, 2, 3].map((item, idx) => (
              <div 
                key={idx} 
                className="relative inline-flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 min-w-[300px] cursor-pointer"
                onMouseEnter={() => setHoveredReview(idx)}
                onMouseLeave={() => setHoveredReview(null)}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  alt="Student"
                  src={
                    item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                    item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                  }
                />
                <div>
                  <div className="flex text-secondary mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-slate-700 font-medium text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>
                </div>

                {/* Hover Bubble */}
                {hoveredReview === idx && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-primary text-white p-4 rounded-2xl shadow-xl z-30 whitespace-normal">
                    <p className="text-sm font-medium">"{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 group-hover:[animation-play-state:paused] absolute top-0">
            {[1, 2, 3, 1, 2, 3].map((item, idx) => (
              <div 
                key={\`dup-\${idx}\`} 
                className="relative inline-flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 min-w-[300px] cursor-pointer"
                onMouseEnter={() => setHoveredReview(idx + 6)}
                onMouseLeave={() => setHoveredReview(null)}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  alt="Student"
                  src={
                    item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyyNzjtg43TxcvsdigBVEUpiyu7-fX-nllStyVwv2CFjT1ZBt98REPre91vgrKsmGXntnlUXGNlZ5p1uz7RFM4ZDMep8VIYlEuBpS9f52nAYMNjFjIwMedlWHDTaE3HVjXrQntwPi6vJc72MX7Msf2bl7pbkIBcHCb14-zQ-YvtMt3kgNo9sgZ4V_2Q2LQ6L77ne1m-bnLKeK3ho6T3rA0SysyhEg8qAYM8Qv_lDS-lZexLKHixdbP-zhWu7LEJ10QCbdICcjXbE" :
                    item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8q4W72-1c2E76JvIqQ68z2Q_F40Yy1E4S49zD7vL91wM870V4q8404L8n30v74390P8v_8_49504N_68305_5994200420084004040004040400400404040040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040" :
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qyhcMpMop-1k5dCgPnQ1PzypwiCk2RAkQ_Kshe5Pfy2XPNaQ3s5wSKcoai9GNhxjoCi5XTzcGj3ILiXF2NkpPPs4gxVTK1cE-XjxP5V7wj43HamWz9NptWCvtgfrCM94IkUd7MyHLjTFRHTFve9MBgoLizK_v0YZdB6NzPIbX50D9z6d3a4Xhqa5y7tVxZHhsA_eFgerVAZDTPYBvWvk2tDU5UWDHXwQfPObJn6WP0jxUISQ3UQPZ0A7UUk3jTYIhUxR1Pj7bBc"
                  }
                />
                <div>
                  <div className="flex text-secondary mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-slate-700 font-medium text-sm whitespace-normal">
                    "{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"
                  </p>
                </div>

                {/* Hover Bubble */}
                {hoveredReview === (idx + 6) && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-primary text-white p-4 rounded-2xl shadow-xl z-30 whitespace-normal">
                    <p className="text-sm font-medium">"{item === 1 ? t.testimonials.t1 : item === 2 ? t.testimonials.t2 : t.testimonials.t3}"</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
`;

appContent = appContent.replace(/\{\/\* Testimonials Section \*\/\}[\s\S]*?<\/section>/, newReviews);

// 5. Update Multimedia Section (Combine Campus Pictures and Video)
const newMultimedia = `
      {/* Multimedia Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                {t.multimedia.title}
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t.multimedia.desc1}
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {t.multimedia.desc2}
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  {t.testimonials.gallery}
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Video Player */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900 group">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000"
                      alt="Campus Video Thumbnail"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl shadow-secondary/30"
                      >
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title="Campus Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              
              {/* Image Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[250px] group">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Campus Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

appContent = appContent.replace(/\{\/\* Campus Pictures \*\/\}[\s\S]*?\{\/\* Unmatched Campus Benefits \*\/\}[\s\S]*?<\/section>/, newMultimedia);

// 6. Update Steps Section (5 steps, visual style of scs12)
const newSteps = `
      {/* Steps Section */}
      <section id="process" className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">{t.process.title}</h2>
            <p className="text-slate-600 text-lg">{t.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
            
            {[
              { num: "1", title: t.process.s1Title, desc: t.process.s1Desc, icon: <FileText className="w-6 h-6" /> },
              { num: "2", title: t.process.s2Title, desc: t.process.s2Desc, icon: <MessageCircle className="w-6 h-6" /> },
              { num: "3", title: t.process.s3Title, desc: t.process.s3Desc, icon: <FileBadge className="w-6 h-6" /> },
              { num: "4", title: t.process.s4Title, desc: t.process.s4Desc, icon: <Globe className="w-6 h-6" /> },
              { num: "5", title: t.process.s5Title, desc: t.process.s5Desc, icon: <PlaneLanding className="w-6 h-6" /> }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-surface group-hover:border-secondary transition-colors duration-300 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

appContent = appContent.replace(/\{\/\* Process Steps \*\/\}[\s\S]*?<\/section>/, newSteps);

// 7. Add Academic Pathway Section after Programs
const newPathway = `
      {/* Academic Pathway Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6">{t.pathway.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{t.pathway.desc}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {[
                { level: "1", title: t.pathway.l1, desc: t.pathway.l1Desc },
                { level: "2", title: t.pathway.l2, desc: t.pathway.l2Desc },
                { level: "3", title: t.pathway.l3, desc: t.pathway.l3Desc },
                { level: "4", title: t.pathway.l4, desc: t.pathway.l4Desc },
                { level: "5", title: t.pathway.l5, desc: t.pathway.l5Desc },
                { level: "6", title: t.pathway.l6, desc: t.pathway.l6Desc },
                { level: "7", title: t.pathway.l7, desc: t.pathway.l7Desc, highlight: true }
              ].map((item, idx) => (
                <div key={idx} className={\`flex items-center p-4 rounded-2xl \${item.highlight ? 'bg-secondary text-primary' : 'bg-white/10 border border-white/10'}\`}>
                  <div className={\`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl mr-6 \${item.highlight ? 'bg-primary text-white' : 'bg-white/20'}\`}>
                    {item.level}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className={\`text-sm \${item.highlight ? 'text-primary/80' : 'text-white/70'}\`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white text-primary p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-black mb-2">{t.pathway.nextStart}</h3>
                <h4 className="text-xl font-bold text-secondary mb-6">{t.pathway.dates}</h4>
                
                <div className="mb-6">
                  <p className="font-bold text-sm mb-1">{t.pathway.f1}</p>
                  <p className="text-slate-600 text-sm">{t.pathway.months}</p>
                </div>
                
                <div className="mb-8">
                  <p className="font-bold text-sm mb-1">{t.pathway.nonF1}</p>
                  <p className="text-slate-600 text-sm">{t.pathway.monthly}</p>
                  <p className="text-slate-400 text-xs mt-1">{t.pathway.excluding}</p>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:opacity-90 transition-all">
                  {t.pathway.check}
                </button>
              </div>

              <div className="bg-secondary/20 border border-secondary/30 p-6 rounded-3xl text-center">
                <p className="text-secondary font-black text-4xl mb-2">{t.pathway.approvalRate}</p>
                <p className="text-sm font-bold tracking-widest">{t.pathway.approvalText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

appContent = appContent.replace(/\{\/\* FAQ Section \*\/\}/, newPathway + '\n\n      {/* FAQ Section */}');

// 8. Update FAQ Section (2 columns)
const newFaq = `
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
                    className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors \${
                      openFaq === index
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 text-slate-400'
                    }\`}
                  >
                    <ChevronDown
                      className={\`w-5 h-5 transition-transform duration-300 \${
                        openFaq === index ? 'rotate-180' : ''
                      }\`}
                    />
                  </div>
                </div>
                <div
                  className={\`overflow-hidden transition-all duration-300 \${
                    openFaq === index
                      ? 'max-h-[500px] opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }\`}
                >
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

appContent = appContent.replace(/\{\/\* FAQ Section \*\/\}[\s\S]*?<\/section>/, newFaq);

// 9. Remove old form section since it's now in Hero
appContent = appContent.replace(/\{\/\* Side Form \/ CTA Section \*\/\}[\s\S]*?\{\/\* Footer \*\/\}/, '{/* Footer */}');

// 10. Add marquee animation to tailwind config
const tailwindConfig = fs.readFileSync('src/index.css', 'utf8');
if (!tailwindConfig.includes('animate-marquee')) {
  const newTailwind = tailwindConfig + `
@theme {
  --animate-marquee: marquee 25s linear infinite;
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
}
`;
  fs.writeFileSync('src/index.css', newTailwind);
}

fs.writeFileSync('src/App.tsx', appContent);
