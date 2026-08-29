interface LegalSection {
  title: string;
  body: React.ReactNode;
}

function LegalCard({ title, body }: LegalSection) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 md:p-8">
      <h2 className="font-serif text-lg text-white mb-3">{title}</h2>
      <div className="text-sm text-white/70 leading-relaxed space-y-3">{body}</div>
    </div>
  );
}

export function Disclaimer() {
  const sections: LegalSection[] = [
    {
      title: 'General Information, Not Legal or Notarial Advice',
      body: (
        <p>
          The content on this website — including descriptions of legal services, notarial services,
          and areas of practice — is provided for general information only. It is not legal advice
          or notarial advice, and it should not be relied upon as a substitute for advice specific to
          your own situation. Legal and notarial matters depend heavily on individual facts, and
          general website content cannot account for those details.
        </p>
      ),
    },
    {
      title: 'No Lawyer-Client or Professional-Client Relationship',
      body: (
        <p>
          Visiting this website, reading its content, or sending a message through the Contact form
          does not create a lawyer-client, notarial-client, or other professional-client
          relationship with Kamal Khadka. Such a relationship is only formed through a direct,
          mutually agreed professional engagement, separate from browsing this website.
        </p>
      ),
    },
    {
      title: 'AI and Technology Content Is Informational',
      body: (
        <p>
          Content on this website relating to artificial intelligence, digital technology, or AI
          practice is shared for general informational and educational purposes. It reflects an
          area of ongoing professional interest and development, and it is not technical
          consultancy, professional AI advice, or a description of a finished, formal service unless
          separately and explicitly agreed.
        </p>
      ),
    },
    {
      title: 'Descriptions of Services Are Not Guarantees of Outcomes',
      body: (
        <p>
          Descriptions of legal services, notarial services, HR-related experience, and other
          professional work on this website describe the areas Kamal Khadka works in and his
          background. They are not a guarantee of any particular result, outcome, timeline, or
          success in any individual matter. Outcomes in legal, notarial, and professional matters
          depend on many factors outside the control of this website.
        </p>
      ),
    },
    {
      title: 'External Resources and KIPLAN Properties',
      body: (
        <p>
          This website links to related, separately operated properties, including KIPLANScholar
          (kiplanscholar.com) and KIPLANLaw (kiplan.com.np), as well as to other external resources
          from time to time. Content on those external sites is controlled by their respective
          operators, not by this website, and this disclaimer does not extend to their content. Kamal
          Khadka is not responsible for the accuracy or availability of external websites.
        </p>
      ),
    },
    {
      title: 'Limitation of Liability',
      body: (
        <p>
          To the extent permitted by law, Kamal Khadka shall not be liable for any direct or
          indirect loss arising from reliance on the information published on this website, or from
          the unavailability or technical interruption of the website itself.
        </p>
      ),
    },
  ];

  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative max-w-3xl">
        <div className="text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">Legal Information</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Important Clarifications
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">Disclaimer</h1>
          <p className="text-white/50 text-sm">Last updated: August 2026</p>
        </div>

        <div className="space-y-5">
          {sections.map((s) => (
            <LegalCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10 text-center">
          <p className="text-white/70 text-sm">
            For a specific matter, please{' '}
            <a href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">
              get in touch directly
            </a>{' '}
            rather than relying on general website content.
          </p>
        </div>
      </div>
    </section>
  );
}