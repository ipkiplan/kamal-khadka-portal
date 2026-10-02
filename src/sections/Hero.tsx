import { useEffect, useRef, useState } from 'react';
import { heroConfig } from '../config';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export function Hero({ isReady }: { isReady: boolean }) {
  // Null check: if config is empty, render nothing
  if (!heroConfig.mainTitle) return null;

  const [phase, setPhase] = useState(0);

  // phase 0: hidden
  // phase 1: background visible
  // phase 2: title/content
  // phase 3: stats
  // phase 4: stats counting

  // Build count-up hooks from stats config
  const stat0 = heroConfig.stats[0];
  const stat1 = heroConfig.stats[1];
  const stat2 = heroConfig.stats[2];

  const count0 = useCountUp(stat0?.value ?? 0, 2000, phase >= 4);
  const count1 = useCountUp(stat1?.value ?? 0, 2200, phase >= 4);
  const count2 = useCountUp(stat2?.value ?? 0, 1800, phase >= 4);

  const counts = [count0, count1, count2];

  useEffect(() => {
    if (!isReady) return;

    // Stagger: background -> title -> stats
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 1400);
    const t4 = setTimeout(() => setPhase(4), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isReady]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle Ken Burns */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1.5s] ease-out ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 hero-kenburns">
          <img
  src={heroConfig.backgroundImage}
  alt={heroConfig.mainTitle}
  className="w-full h-full object-cover object-center lg:object-[center_50%] scale-95"
/>
        </div>

        {/* Darker on the left, transparent toward the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full py-32 lg:py-40">
        <div className="w-full text-center mt-[28vh] lg:mt-[24vh]">

          {/* Line 1 — Professional Practice · Innovation */}
          <div
            className={`w-full text-center transition-all duration-1000 ease-out ${
              phase >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-block font-script text-4xl md:text-5xl lg:text-6xl text-gold-400 whitespace-nowrap">
              {heroConfig.scriptText}
            </span>
          </div>

          {/* Divider */}
          <div
            className={`mx-auto my-6 h-px bg-gold-500/50 transition-all duration-1000 ease-out ${
              phase >= 2
                ? 'w-24 opacity-100'
                : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          />

          {/* Line 2 — Kamal Khadka */}
          <h1
            className={`block w-full text-center font-serif text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white leading-[1.05] tracking-wide whitespace-nowrap transition-all duration-1000 ease-out ${
              phase >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {heroConfig.mainTitle}
          </h1>

          {/* Line 3 — Professional Identity */}
          {heroConfig.professionalIdentity && (
            <div
              className={`mt-4 w-full text-center transition-all duration-1000 ease-out ${
                phase >= 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="inline-block text-gold-500 text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                {heroConfig.professionalIdentity}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Stats with count-up */}
      {heroConfig.stats.length > 0 && (
        <div
          className={`absolute bottom-20 left-0 right-0 z-10 transition-all duration-1000 ease-out ${
            phase >= 4
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="container-custom">
            <div
              className="grid gap-8 max-w-3xl mx-auto"
              style={{
                gridTemplateColumns: `repeat(${heroConfig.stats.length}, minmax(0, 1fr))`,
              }}
            >
              {heroConfig.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    index > 0 && index < heroConfig.stats.length
                      ? 'border-l border-white/20'
                      : ''
                  }`}
                >
                  <div className="font-serif text-3xl md:text-4xl text-gold-500 mb-2 tabular-nums">
                    {counts[index]}
                    {stat.suffix}
                  </div>

                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />
    </section>
  );
}