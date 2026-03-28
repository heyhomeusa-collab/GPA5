import { useLanguage } from '../context/LanguageContext';

export function StepByStep() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black text-primary tracking-tight">
            {t.process.title}
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="relative group">
            <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-200 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
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
            <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-200 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
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
            <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-200 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
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
            <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-200 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
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
          <div className="relative group">
            <span className="absolute -top-12 left-0 text-[100px] font-black text-slate-200 group-hover:text-secondary/20 transition-colors pointer-events-none -z-0">
              05
            </span>
            <div className="relative z-10 pt-4">
              <h4 className="font-black text-2xl text-primary mb-3">
                {t.process.s5Title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                {t.process.s5Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
