import Logo from "./Logo";
import FooterWordmark from "./FooterWordmark";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-20 pb-6">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-8 max-w-sm text-white/60 leading-relaxed">
              A veteran and former-law-enforcement-owned studio building
              custom pools, spas and outdoor living across Greater Houston
              for 15 years.
            </p>
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-white/50">
              · Veteran Owned & Operated
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={[
              { label: "Story", href: "#story" },
              { label: "Process", href: "#process" },
              { label: "Recognition", href: "#trust" },
              { label: "Coverage", href: "#coverage" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: "Custom Pools", href: "#services" },
              { label: "Spas & Hot Tubs", href: "#services" },
              { label: "Outdoor Kitchens", href: "#services" },
              { label: "Fire & Water Features", href: "#services" },
            ]}
          />
          <FooterCol
            title="Visit"
            links={[
              { label: "2717 Commercial Center Blvd, Suite E200", href: "https://maps.google.com/?q=2717+Commercial+Center+Blvd+Suite+E200+Katy+TX+77494" },
              { label: "Katy, TX 77494", href: "https://maps.google.com/?q=2717+Commercial+Center+Blvd+Suite+E200+Katy+TX+77494" },
              { label: "832-870-POOL", href: "tel:+18328707665" },
              { label: "Info@texascustomoutdoors.com", href: "mailto:Info@texascustomoutdoors.com" },
            ]}
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/50">
          <div>© {new Date().getFullYear()} Texas Custom Outdoors LLC · Built in Texas</div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/texascustomoutdoors"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/texascustomoutdoors"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a href="#trust" className="hover:text-white">
              Accreditations
            </a>
          </div>
        </div>

      </div>

      {/* Giant wordmark — spans full footer width, letters rise on enter */}
      <FooterWordmark />
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/50 mb-5">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-white/85 hover:text-white transition-colors"
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
