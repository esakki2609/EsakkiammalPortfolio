import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import { profile } from "@/lib/resume";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Esakkiammal Palanisamy.",
};

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
    },
    {
      label: "Phone",
      value: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      icon: FaPhone,
    },
    {
      label: "LinkedIn",
      value: "esakkiammal-palanisamy",
      href: profile.linkedIn,
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "esakki2609",
      href: profile.github,
      icon: FaGithub,
    },
  ];

  return (
    <div className="page-shell py-14 md:py-20">
      <PageHeader
        title="Contact"
        description="Open to full-stack, serverless, and AI-integrated product work. Reach out by email or LinkedIn."
      />

      <div className="animate-rise-delay max-w-xl space-y-0 divide-y divide-line border-y border-line mb-10">
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 py-5 group"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-brand text-white">
              <Icon aria-hidden />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-brand-dark font-semibold">
                {label}
              </span>
              <span className="text-ink group-hover:text-brand-deep transition-colors">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <a
        href={profile.resumeUrl}
        download="EsakkiammalDeveloper.pdf"
        className="inline-block bg-brand text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-brand-dark transition-colors"
      >
        Download resume
      </a>
    </div>
  );
}
