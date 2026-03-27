import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export function BottomNav() {
  const { t } = useLanguage();

  return (
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
  );
}
