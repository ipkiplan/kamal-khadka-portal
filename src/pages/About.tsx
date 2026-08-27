import { JourneyChapters } from '../sections/JourneyChapters';

// The real About page. Content is Kamal Khadka's approved founder-story
// manuscript (see src/data/founderChapters.ts), presented as the same
// 15-chapter expandable structure originally built for KIPLANScholar,
// restyled to this site's existing gold/dark design system. The separate
// "Meet the Founder" intro/identity block has been intentionally removed
// per Principal instruction — the page opens directly with the journey.
export function About() {
  return (
    <div>
      <JourneyChapters />
    </div>
  );
}