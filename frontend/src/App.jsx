import Navbar from './components/Navbar.jsx';
import BentoGrid from './components/bento/BentoGrid.jsx';
import HeroCard from './components/bento/HeroCard.jsx';
import StatusCard from './components/bento/StatusCard.jsx';
import SocialCard from './components/bento/SocialCard.jsx';
import OneboxStackCard from './components/bento/OneboxStackCard.jsx';
import DataScienceStackCard from './components/bento/DataScienceStackCard.jsx';
import FeaturedProjectCard from './components/bento/FeaturedProjectCard.jsx';
import ProjectsListCard from './components/bento/ProjectsListCard.jsx';
import EducationCard from './components/bento/EducationCard.jsx';
import ContactCard from './components/bento/ContactCard.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 md:pt-28 lg:px-8">
        <BentoGrid>
          <HeroCard />
          <StatusCard />
          <SocialCard />
          <OneboxStackCard />
          <DataScienceStackCard />
          <FeaturedProjectCard />
          <EducationCard />
          <ProjectsListCard />
          <ContactCard />
        </BentoGrid>
        <footer className="mt-12 text-center font-mono text-xs text-ink-muted">
          <span className="label-mono">© {new Date().getFullYear()} · Built with React + Vite</span>
        </footer>
      </main>
    </>
  );
}
