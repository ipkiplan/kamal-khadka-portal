import { Hero } from '../sections/Hero';
import { WineShowcase } from '../sections/WineShowcase';
import { WineryCarousel } from '../sections/WineryCarousel';
import { Museum } from '../sections/Museum';
import { useSEO } from '../hooks/useSEO';

interface HomeProps {
  isReady: boolean;
}

// The existing Home experience, unchanged — preserved exactly as it was in
// the pre-routing single-page site, just relocated to its own route.
export function Home({ isReady }: HomeProps) {
  useSEO({
    title: 'Kamal Khadka — Advocate, Notary Public & AI Practitioner | Kathmandu, Nepal',
    description: 'Kamal Khadka is an Advocate, Notary Public and AI Practitioner in Kathmandu, Nepal, offering legal, notarial and professional services through the KIPLAN ecosystem.',
  });

  return (
    <>
      <Hero isReady={isReady} />
      <WineShowcase />
      <WineryCarousel />
      <Museum />
    </>
  );
}