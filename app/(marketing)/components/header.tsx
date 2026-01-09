"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "AI Agents", href: "#agents" },
  { name: "Why Auton", href: "#differentiators" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/"} className="flex items-center gap-3 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-yellow text-brand-black shadow-glow">
            A
          </span>
          <div className="flex flex-col leading-none">
            <span>Auton AI</span>
            <span className="text-xs text-white/60">by ObscuraQ Technologies</span>
          </div>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-brand-yellow"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#demo"
            className="rounded-full border border-brand-blue/60 px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-yellow hover:text-brand-yellow"
          >
            Request Demo
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-yellow hover:text-brand-black"
          >
            Launch Console
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/5 bg-brand-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-brand-yellow"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#demo"
              className="rounded-full border border-brand-blue/60 px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-yellow hover:text-brand-yellow"
              onClick={() => setOpen(false)}
            >
              Request Demo
            </Link>
            <Link
              href="/auth/login"
              className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-yellow hover:text-brand-black"
              onClick={() => setOpen(false)}
            >
              Launch Console
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
