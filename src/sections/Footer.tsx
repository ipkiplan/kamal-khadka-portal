import { Link } from 'react-router-dom';
import {
  Wine,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUp,
} from 'lucide-react';
import { footerConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Wine,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUp,
};

export function Footer() {
  // Null check: if config is empty, render nothing
  if (!footerConfig.brandName) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================= */}
      {/* KIPLAN ECOSYSTEM - SEPARATE FEATURED SECTION             */}
      {/* ========================================================= */}

      {footerConfig.ecosystemLinks.length > 0 && (
        <section
          aria-labelledby="kiplan-ecosystem-heading"
          className="border-t border-gold-500/20 bg-black py-16 md:py-20"
        >
          <div className="container-custom">

            {/* Ecosystem Heading */}
            <div className="mb-10 text-center">
              <h2
                id="kiplan-ecosystem-heading"
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-white"
              >
                KIPLAN Ecosystem
              </h2>

              <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-400">
                Initiatives by Kamal Khadka &amp; Team
              </p>
            </div>

            {/* Ecosystem Rows */}
            <div className="space-y-5">
              {footerConfig.ecosystemLinks.map((eco) => (
                <div
                  key={eco.name}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-center gap-5 md:gap-8 rounded-lg border border-gold-500/70 bg-white/[0.025] px-6 py-6 md:px-8 md:py-7 transition-all duration-300 hover:border-gold-400 hover:bg-white/[0.05]"
                >

                  {/* Initiative Name */}
                  <div className="md:border-r md:border-gold-500/40 md:pr-7">
                    {eco.external ? (
                      <a
                        href={eco.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-lg md:text-xl text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        {eco.name}
                      </a>
                    ) : (
                      <Link
                        to={eco.href}
                        className="font-serif text-lg md:text-xl text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        {eco.name}
                      </Link>
                    )}
                  </div>

                  {/* Explanation */}
                  <div>
                    <p className="text-sm md:text-[15px] leading-7 text-white/65">
                      {eco.description}
                    </p>
                  </div>

                  {/* Visit Link */}
                  <div className="md:justify-self-end">
                    {eco.external ? (
                      <a
                        href={eco.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center whitespace-nowrap text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white/80 hover:text-gold-400 transition-colors"
                      >
                        Visit
                        <span className="ml-2 text-base md:text-lg">
                          →
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={eco.href}
                        className="inline-flex items-center whitespace-nowrap text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white/80 hover:text-gold-400 transition-colors"
                      >
                        Visit
                        <span className="ml-2 text-base md:text-lg">
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Ecosystem Closing Note */}
            <p className="mt-8 text-center text-xs leading-relaxed text-white/40">
              Explore, share and discover the initiatives that connect
              legal services, education and notarial support.
            </p>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* MAIN WEBSITE FOOTER                                      */}
      {/* ========================================================= */}

      <footer
        className="relative border-t border-white/10 bg-black"
        role="contentinfo"
      >
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Wine
                  className="w-8 h-8 text-gold-500"
                  aria-hidden="true"
                />

                <div>
                  <span className="font-serif text-xl text-white block">
                    {footerConfig.brandName}
                  </span>

                  {footerConfig.tagline && (
                    <span className="text-[10px] text-gold-400 tracking-widest uppercase">
                      {footerConfig.tagline}
                    </span>
                  )}
                </div>
              </div>

              {footerConfig.description && (
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {footerConfig.description}
                </p>
              )}

              {/* Social Links */}
              {footerConfig.socialLinks.length > 0 && (
                <nav aria-label="Social media links">
                  <div className="flex gap-3">
                    {footerConfig.socialLinks.map((social) => {
                      const IconComponent = iconMap[social.icon];

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </nav>
              )}
            </div>

            {/* Link Groups */}
            {footerConfig.linkGroups.map((group, index) => (
              <nav key={index} aria-label={group.title}>
                <h3 className="font-serif text-lg text-white mb-5">
                  {group.title}
                </h3>

                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 text-sm hover:text-gold-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact Info */}
            <div>
              {footerConfig.contactItems.length > 0 && (
                <>
                  <h3 className="font-serif text-lg text-white mb-5">
                    {footerConfig.contactHeading}
                  </h3>

                  <ul className="space-y-4">
                    {footerConfig.contactItems.map((item, index) => {
                      const IconComponent = iconMap[item.icon];

                      return (
                        <li
                          key={index}
                          className="flex items-start gap-3"
                        >
                          {IconComponent && (
                            <IconComponent
                              className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                          )}

                          {item.icon === 'Mail' ? (
                            <a
                              href={`mailto:${item.text}`}
                              className="text-white/70 text-sm hover:text-gold-400 transition-colors"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <span className="text-white/70 text-sm">
                              {item.text}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright + Legal */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-xs">
              {footerConfig.copyrightText && (
                <span>{footerConfig.copyrightText}</span>
              )}

              {footerConfig.legalLinks.map((link) => (
                <span key={link.name}>
                  <span className="hidden md:inline">|</span>

                  <Link
                    to={link.href}
                    className="hover:text-gold-400 transition-colors ml-2 md:ml-0"
                  >
                    {link.name}
                  </Link>
                </span>
              ))}

              {footerConfig.icpText && (
                <>
                  <span className="hidden md:inline">|</span>
                  <span>{footerConfig.icpText}</span>
                </>
              )}

              {footerConfig.developerAttribution && (
                <>
                  <span className="hidden md:inline">|</span>
                  <span className="text-white/35">
                    {footerConfig.developerAttribution}
                  </span>
                </>
              )}
            </div>

            {/* Back to Top */}
            {footerConfig.backToTopText && (
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-white/70 text-sm hover:text-gold-400 transition-colors group"
                aria-label={footerConfig.backToTopText}
              >
                <span>{footerConfig.backToTopText}</span>

                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500 transition-all duration-300">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </button>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}