import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/resume";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden">
      <div
        className="absolute inset-0 bg-brand"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.18), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 flex min-h-[calc(100vh-4.5rem)] flex-col justify-center py-16 md:py-20">
        <div className="animate-fade mb-8">
          <Image
            src="/nameLogo.jpeg"
            alt="Esakkiammal logo"
            width={112}
            height={112}
            className="rounded-full ring-2 ring-white/40 shadow-lg"
            priority
          />
        </div>

        <p className="animate-rise font-display text-4xl md:text-6xl text-white tracking-tight mb-3">
          {profile.name}
        </p>
        <h1 className="animate-rise-delay font-body text-lg md:text-xl font-semibold text-white/95 mb-5 max-w-xl">
          {profile.role}
        </h1>
        <p className="animate-rise-delay max-w-xl text-white/85 text-base md:text-lg leading-relaxed mb-10">
          Building scalable web apps, serverless systems, and AI-powered automation
          with end-to-end ownership from design to deployment.
        </p>

        <div className="animate-rise-delay flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="bg-white text-brand-deep px-6 py-3 text-sm font-semibold tracking-wide hover:bg-brand-soft transition-colors"
          >
            View experience
          </Link>
          <Link
            href="/contact"
            className="border border-white/80 text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
