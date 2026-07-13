"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/lib/resume";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-[rgba(243,247,236,0.92)] backdrop-blur-md">
      <div className="page-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/nameLogo.jpeg"
            alt="Esakkiammal logo"
            width={44}
            height={44}
            className="rounded-full ring-1 ring-brand/30"
            priority
          />
          <span className="font-display text-xl text-ink tracking-tight group-hover:text-brand-dark transition-colors">
            {profile.name}
          </span>
        </Link>

        <button
          type="button"
          className="md:hidden text-ink border border-line px-3 py-1.5 text-sm"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } md:flex absolute md:static left-0 right-0 top-full md:top-auto flex-col md:flex-row gap-1 md:gap-6 bg-brand-mist md:bg-transparent border-b md:border-0 border-line px-5 py-4 md:p-0`}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-wide transition-colors py-2 md:py-0 ${
                  active
                    ? "text-brand-deep font-semibold"
                    : "text-muted hover:text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
