import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { wineShowcaseConfig } from '../config';

export function WineShowcase() {
  // Null check: if config is empty, render nothing
  if (!wineShowcaseConfig.mainTitle || wineShowcaseConfig.wines.length === 0) return null;

  const [activeWine, setActiveWine] = useState(0);
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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const wines = wineShowcaseConfig.wines;
  const wine = wines[activeWine];

  const nextWine = () => setActiveWine((prev) => (prev + 1) % wines.length);
  const prevWine = () => setActiveWine((prev) => (prev - 1 + wines.length) % wines.length);

  return (
    <section
      id="wines"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d2a855 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">{wineShowcaseConfig.scriptText}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {wineShowcaseConfig.subtitle}
          </span>
          <h2 className="font-serif text-h1 text-white">{wineShowcaseConfig.mainTitle}</h2>
        </div>

        {/* Wine Tabs */}
        <div className="fade-up flex justify-center gap-2 mb-16" style={{ transitionDelay: '0.1s' }}>
          {wines.map((w, i) => (
            <button
              key={w.id}
              onClick={() => setActiveWine(i)}
              className={`px-6 py-3 rounded-sm text-sm transition-all duration-300 ${
                i === activeWine
                  ? 'bg-gold-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {w.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="slide-in-left order-1">
            {/* Year + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                {wine.year && (
                  <span className="font-serif text-6xl lg:text-7xl text-gold-500/30 leading-none">{wine.year}</span>
                )}
                <div>
                  <h2 className="font-serif text-h3 text-white leading-tight">{wine.name}</h2>
                  <span className="font-script text-xl text-gold-400">{wine.subtitle}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-gold-500 mt-4" />
            </div>

            {/* Description */}
            <p className="text-white/85 leading-relaxed mb-4">{wine.description}</p>
            {wine.tastingNotes && (
              wine.id === 'legal' ? (
                <p className="text-gold-400 italic leading-relaxed text-sm mb-8 pl-4 border-l-2 border-gold-500/50">
                  {wine.tastingNotes}
                </p>
              ) : (
                <p className="text-white/65 leading-relaxed text-sm mb-8">{wine.tastingNotes}</p>
              )
            )}

            {/* CTA */}
            {wine.ctaExternal ? (
              <a
                href={wine.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-sm inline-flex items-center gap-2 group"
                aria-label={wine.ctaText}
              >
                {wine.ctaText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
              <Link
                to={wine.ctaHref}
                className="btn-primary rounded-sm inline-flex items-center gap-2 group"
                aria-label={wine.ctaText}
              >
                {wine.ctaText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Right: Category Image */}
          <div className="slide-in-right order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-48 h-48 ${wine.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Images */}
              {wines.map((w, i) => (
                <img
                  key={w.id}
                  src={w.image}
                  alt={`${w.name} - ${w.subtitle}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={w.filter ? { filter: w.filter } : undefined}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg z-10 drop-shadow-2xl transition-all duration-700 ${
                    i === activeWine
                      ? 'opacity-100 scale-100 translate-y-0'
                      : i < activeWine
                        ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                        : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                  }`}
                />
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevWine}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Previous category"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-white/50 font-serif tabular-nums whitespace-nowrap">
                  {activeWine + 1} / {wines.length}
                </span>
                <button
                  onClick={nextWine}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Next category"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}