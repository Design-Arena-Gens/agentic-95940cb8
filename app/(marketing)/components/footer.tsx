import Link from "next/link";
import { Github, Linkedin, Shield } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Unified Platform", href: "#platform" },
      { label: "Agent Network", href: "#agents" },
      { label: "Threat Intel", href: "#intel" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About ObscuraQ", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "Careers", href: "#careers" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "/docs" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Security", href: "#trust" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black/80 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-yellow text-brand-black">
              A
            </span>
            <div className="flex flex-col leading-none">
              <span>Auton AI</span>
              <span className="text-xs text-white/60">Adaptive Cyber Defense</span>
            </div>
          </div>
          <p className="text-sm text-white/60">
            Auton AI orchestrates autonomous threat detection, intelligence fusion, and orchestrated response for hybrid enterprises.
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <Link href="https://github.com" className="hover:text-brand-yellow">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-brand-yellow">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#trust" className="hover:text-brand-yellow">
              <Shield className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white/80">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-brand-yellow">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} ObscuraQ Technologies. All rights reserved.
      </div>
    </footer>
  );
}
