import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsConfig } from '../config';

// The "Blog & Resources" article grid, extracted from News.tsx so it can
// live on its own dedicated /blog page. Reads the same newsConfig object
// News.tsx already used -- only the article-grid-related fields
// (scriptText, subtitle, mainTitle, viewAllText, readMoreText, articles).
// The Testimonials and Story sections remain in News.tsx, untouched, and
// keep reading the rest of newsConfig exactly as before.
export function BlogResources() {
  // Null check: if config is empty, render nothing
  if (!newsConfig.mainTitle) return null;

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
    <section
      id="news"
      ref={sectionRef}
      className="section-padding pt-40 md:pt-48 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-3xl text-gold-400 block mb-2">{newsConfig.scriptText}</span>
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {newsConfig.subtitle}
            </span>
            <h2 className="font-serif text-h1 text-white has-bar">
              {newsConfig.mainTitle}
            </h2>
          </div>
          {newsConfig.viewAllText && (
            <button className="px-4 py-2 text-xs bg-[#0d0d0d] border border-white/15 text-white rounded-sm flex items-center gap-2 group w-fit hover:border-gold-500 transition-colors" aria-label={newsConfig.viewAllText}>
              {newsConfig.viewAllText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* News Grid */}
        {newsConfig.articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {newsConfig.articles.map((item, index) => (
              <article
                key={item.id}
                className="fade-up group cursor-pointer"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-5">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500/90 text-white text-xs rounded-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Date */}
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-h5 text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  {newsConfig.readMoreText && (
                    <span className="inline-flex items-center gap-2 text-gold-500 text-sm group-hover:gap-3 transition-all duration-300">
                      {newsConfig.readMoreText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}