interface PagePlaceholderProps {
  scriptText: string;
  subtitle: string;
  title: string;
  note?: string;
}

// Minimal, on-brand placeholder used for routes established in the routing
// foundation slice but not yet built out with full content. Reuses the same
// section-padding / container-custom / typography conventions as the rest
// of the site so it reads as part of the same website, not a dead end.
export function PagePlaceholder({ scriptText, subtitle, title, note }: PagePlaceholderProps) {
  return (
    <section className="section-padding pt-40 md:pt-48 min-h-[70vh] relative overflow-hidden">
      <div className="container-custom relative text-center">
        <span className="font-script text-3xl text-gold-400 block mb-2">{scriptText}</span>
        <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
          {subtitle}
        </span>
        <h1 className="font-serif text-h1 text-white mb-6">{title}</h1>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
          {note || 'This page is part of the site\u2019s ongoing expansion. Full content is being prepared and will appear here in an upcoming implementation phase.'}
        </p>
      </div>
    </section>
  );
}
