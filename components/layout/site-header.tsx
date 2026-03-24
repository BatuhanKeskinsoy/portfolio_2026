import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";

const navItems = [
  { href: "#about", label: "Hakkımda" },
  { href: "#projects", label: "Projeler" },
  { href: "#experience", label: "Deneyim" },
  { href: "#contact", label: "İletişim" },
];

type SiteHeaderProps = {
  initialTheme?: "dark" | "light";
};

export function SiteHeader({ initialTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-token bg-token/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold tracking-[0.2em] text-token">
          BATUHAN
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Ana navigasyon" className="hidden md:block">
            <ul className="flex items-center gap-4 text-sm text-token-secondary">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="cursor-pointer transition hover:text-token" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle initialTheme={initialTheme} />
        </div>
      </div>
    </header>
  );
}
