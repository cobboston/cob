import Link from "next/link";
import { NAV_LINKS, ORG } from "@/lib/content";
import { LogoMark } from "@/components/logo";
import { MapPin } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-deep px-6 pb-10 pt-16 text-cream">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-semibold">
                COB Boston
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              {ORG.name} — uniting people with roots in Kigezi and their
              families to thrive socially, professionally, and economically.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-cream/65">
              <MapPin size={15} className="text-gold-soft" />
              {ORG.region}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-cream/75 transition-colors hover:text-gold-soft"
                >
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="text-sm text-cream/75 transition-colors hover:text-gold-soft"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            &copy; {year} {ORG.name}. All rights reserved.
          </p>
          <p className="italic">Tukore hamwe — let us build together.</p>
        </div>
      </div>
    </footer>
  );
}
