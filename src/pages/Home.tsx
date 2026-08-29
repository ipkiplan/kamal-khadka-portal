import { Hero } from '../sections/Hero';
import { WineShowcase } from '../sections/WineShowcase';
import { WineryCarousel } from '../sections/WineryCarousel';
import { Museum } from '../sections/Museum';

interface HomeProps {
  isReady: boolean;
}

// The existing Home experience, unchanged — preserved exactly as it was in
// the pre-routing single-page site, just relocated to its own route.
export function Home({ isReady }: HomeProps) {
  return (
    <>
      <Hero isReady={isReady} />
      <WineShowcase />
      <WineryCarousel />
      <Museum />
    </>
  );
}