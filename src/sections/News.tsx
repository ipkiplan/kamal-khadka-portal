import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { newsConfig } from '../config';

export function News() {
  // Null check: if neither remaining section has content, render nothing
  if (newsConfig.testimonials.length === 0 && !newsConfig.storyTitle) return null;

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Testimonials Section */}
        {newsConfig.testimonials.length > 0 && (
          <div>
            <div className="fade-up text-center mb-12">
              <span className="font-script text-3xl text-gold-400 block mb-2">{newsConfig.testimonialsScriptText}</span>
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {newsConfig.testimonialsSubtitle}
              </span>
              <h2 className="font-serif text-h2 text-white">
                {newsConfig.testimonialsMainTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newsConfig.testimonials.map((t, index) => (
                <div
                  key={t.name}
                  className="scale-in p-8 bg-white/5 rounded-lg border border-white/10 relative"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Quote className="w-8 h-8 text-gold-500/30 absolute top-6 right-6" />
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        {newsConfig.storyTitle && (
          <div id="story" className="fade-up mt-24 pt-20 border-t border-white/10" style={{ transitionDelay: '0.1s' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="slide-in-left">
                <span className="font-script text-3xl text-gold-400 block mb-2">{newsConfig.storyScriptText}</span>
                <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                  {newsConfig.storySubtitle}
                </span>
                <h2 className="font-serif text-h2 text-white mb-6">
                  {newsConfig.storyTitle}
                </h2>
                <div className="space-y-4 text-white/75 leading-relaxed">
                  {newsConfig.storyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Timeline Highlights */}
                {newsConfig.storyTimeline.length > 0 && (
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {newsConfig.storyTimeline.map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="font-serif text-2xl text-gold-500 mb-1">{item.value}</div>
                        <div className="text-xs text-white/60">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="slide-in-right relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  {newsConfig.storyImage && (
                    <>
                      <img
                        src={newsConfig.storyImage}
                        alt={newsConfig.storyImageCaption}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  )}
                </div>

                {/* Quote Overlay */}
                {newsConfig.storyQuote.text && (
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-sm rounded-lg">
                    {newsConfig.storyQuote.prefix && (
                      <p className="font-script text-2xl text-gold-400 mb-1">{newsConfig.storyQuote.prefix}</p>
                    )}
                    <p className="text-white italic text-sm leading-relaxed mb-2">
                      "{newsConfig.storyQuote.text}"
                    </p>
                    {newsConfig.storyQuote.attribution && (
                      <p className="text-gold-400 text-xs">— {newsConfig.storyQuote.attribution}</p>
                    )}
                  </div>
                )}

                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-gold-500/20 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}