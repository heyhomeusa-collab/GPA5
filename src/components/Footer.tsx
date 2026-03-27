import { useLanguage } from '../context/LanguageContext';
import { BarChart2, Camera, Video } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
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
  );
}
