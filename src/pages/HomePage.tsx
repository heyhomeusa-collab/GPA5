import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { CampusPictures } from '../components/CampusPictures';
import { StepByStep } from '../components/StepByStep';
import { Programs } from '../components/Programs';
import { AcademicPathway } from '../components/AcademicPathway';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { BottomNav } from '../components/BottomNav';
import { ApplicationForm } from '../components/ApplicationForm';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans overflow-x-hidden">
      <Navigation />
      <Hero />
      <Reviews />
      <CampusPictures />
      <StepByStep />
      <Programs />
      <AcademicPathway />
      <FAQ />
      <ApplicationForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
