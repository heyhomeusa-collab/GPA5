import { LanguageProvider } from './context/LanguageContext';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}