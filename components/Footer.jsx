import Link from "next/link";
import { profile } from "@/lib/resume";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line/70 bg-brand text-white">
      <div className="page-shell flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-sm">
        <p className="opacity-90">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <div className="flex gap-5">
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <a
            href={profile.resumeUrl}
            download="EsakkiammalDeveloper.pdf"
            className="hover:underline underline-offset-4"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
