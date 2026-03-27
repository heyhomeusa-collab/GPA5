import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { CampusPictures } from '../components/CampusPictures';
import { Multimedia } from '../components/Multimedia';
import { StepByStep } from '../components/StepByStep';
import { Programs } from '../components/Programs';
import { AcademicPathway } from '../components/AcademicPathway';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { BottomNav } from '../components/BottomNav';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Navigation />
      <Hero />
      <Reviews />
      <CampusPictures />
      <Multimedia />
      <StepByStep />
      <Programs />
      <AcademicPathway />
      <FAQ />
      <Footer />
      <BottomNav />
    </div>
  );
}
