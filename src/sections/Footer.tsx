import { Link } from 'react-router-dom';
import { Wine, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { footerConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wine, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Linkedin, ArrowUp,
};

export function Footer() {
  // Null check: if config is empty, render nothing
  if (!footerConfig.brandName) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Wine className="w-8 h-8 text-gold-500" aria-hidden="true" />
              <div>
                <span className="font-serif text-xl text-white block">{footerConfig.brandName}</span>
                {footerConfig.tagline && (
                  <span className="text-[10px] text-gold-400 tracking-widest uppercase">{footerConfig.tagline}</span>
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
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                      </a>
                    );
                  })}
                </div>
              </nav>
            )}

            {/* KIPLAN Ecosystem */}
            {footerConfig.ecosystemLinks.length > 0 && (
              <nav aria-label="KIPLAN ecosystem" className="mt-6">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {footerConfig.ecosystemLinks.map((eco) =>
                    eco.external ? (
                      <a
                        key={eco.name}
                        href={eco.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 text-xs hover:text-gold-400 transition-colors"
                      >
                        {eco.name}
                      </a>
                    ) : (
                      <Link
                        key={eco.name}
                        to={eco.href}
                        className="text-white/60 text-xs hover:text-gold-400 transition-colors"
                      >
                        {eco.name}
                      </Link>
                    )
                  )}
                </div>
              </nav>
            )}
          </div>

          {/* Link Groups */}
          {footerConfig.linkGroups.map((group, index) => (
            <nav key={index} aria-label={group.title}>
              <h3 className="font-serif text-lg text-white mb-5">{group.title}</h3>
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

          {/* Contact Info + Newsletter */}
          <div>
            {footerConfig.contactItems.length > 0 && (
              <>
                <h3 className="font-serif text-lg text-white mb-5">{footerConfig.contactHeading}</h3>
                <ul className="space-y-4">
                  {footerConfig.contactItems.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={index} className="flex items-start gap-3">
                        {IconComponent && <IconComponent className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" aria-hidden="true" />}
                        {item.icon === 'Mail' ? (
                          <a href={`mailto:${item.text}`} className="text-white/70 text-sm hover:text-gold-400 transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-white/70 text-sm">{item.text}</span>
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-xs">
            {footerConfig.copyrightText && (
              <span>{footerConfig.copyrightText}</span>
            )}
            {footerConfig.legalLinks.map((link) => (
              <span key={link.name}>
                <span className="hidden md:inline">|</span>
                <Link to={link.href} className="hover:text-gold-400 transition-colors ml-2 md:ml-0">{link.name}</Link>
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
                <span className="text-white/35">{footerConfig.developerAttribution}</span>
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
  );
}