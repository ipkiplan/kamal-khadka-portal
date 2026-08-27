import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FOUNDER_CHAPTERS, type ChapterImage } from '../data/founderChapters';

function ChapterCard({
  number,
  title,
  preview,
  fullText,
  images,
  imageSide = 'left',
  index,
}: {
  number: number;
  title: string;
  preview: string;
  fullText: string[];
  images?: ChapterImage[];
  imageSide?: 'left' | 'right';
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasImages = images && images.length > 0;
  const [primaryImage, ...supportingImages] = images ?? [];

  const textColumn = (
    <div className={hasImages ? 'flex flex-col h-full' : ''}>
      <div className="flex items-start gap-4">
        <span className="shrink-0 mt-1 flex items-center justify-center w-9 h-9 rounded-full bg-gold-500/10 text-gold-500 font-serif font-bold text-sm">
          {number}
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-h5 md:text-h4 text-white">{title}</h3>
        </div>
      </div>

      <div className="mt-5 text-white/70 text-[15px] leading-relaxed space-y-4">
        <p>{preview}</p>

        {expanded && (
          <div className="space-y-4 pt-1 border-t border-white/10 mt-2">
            {fullText.map((paragraph, i) => (
              <p key={i} className="pt-3 first:pt-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors"
      >
        {expanded ? (
          <>
            Show less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read more <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );

  const imageColumn = hasImages && (
    <div className="flex flex-col h-full min-h-[280px] lg:min-h-0 gap-3">
      <div className="flex-1 overflow-hidden rounded-lg border border-white/10 shadow-lg min-h-0">
        <img src={primaryImage.src} alt={primaryImage.alt} className="w-full h-full object-cover" />
      </div>
      {supportingImages.length > 0 && (
        <div className="grid grid-cols-2 gap-3 h-24 sm:h-28 shrink-0">
          {supportingImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-white/10">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className="fade-up bg-white/5 rounded-lg border border-white/10 p-6 sm:p-8"
      style={{ transitionDelay: `${Math.min(index * 0.04, 0.3)}s` }}
    >
      {hasImages ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          <div className={`lg:col-span-5 ${imageSide === 'left' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            {imageColumn}
          </div>
          <div className={`lg:col-span-7 ${imageSide === 'left' ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
            {textColumn}
          </div>
        </div>
      ) : (
        textColumn
      )}
    </div>
  );
}

export function JourneyChapters() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="my-journey" ref={sectionRef} className="section-padding pt-40 md:pt-48 relative overflow-hidden">
      <div className="container-custom relative max-w-4xl space-y-16">
        <div className="fade-up text-center space-y-3">
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] block">
            From Kathmandu to Canberra and Back
          </span>
          <h2 className="font-serif text-h1 text-white">My Journey</h2>
        </div>

        <div className="space-y-6">
          {FOUNDER_CHAPTERS.map((chapter, index) => (
            <ChapterCard
              key={chapter.number}
              number={chapter.number}
              title={chapter.title}
              preview={chapter.preview}
              fullText={chapter.fullText}
              images={chapter.images}
              imageSide={chapter.imageSide}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}