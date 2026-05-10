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
              A small studio of pool designers and gunite craftsmen, building
              architecture-grade outdoor living across Texas since 1998.
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={["Story", "Process", "Press", "Careers"]}
          />
          <FooterCol
            title="Disciplines"
            links={["Pools", "Spas", "Outdoor Living", "Automation"]}
          />
          <FooterCol
            title="Visit"
            links={[
              "Austin · HQ",
              "Houston",
              "Dallas",
              "hello@texus.studio",
            ]}
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/50">
          <div>© {new Date().getFullYear()} Texus Studio · Built in Texas</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Houzz</a>
            <a href="#" className="hover:text-white">Pinterest</a>
          </div>
        </div>

      </div>

      {/* Giant wordmark — spans full footer width, letters rise on enter */}
      <FooterWordmark />
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/50 mb-5">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-white/85 hover:text-white transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
