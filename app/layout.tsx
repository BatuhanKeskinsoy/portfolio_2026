import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://batuhankeskinsoy.com"),
  title: {
    default: "Batuhan Keskinsoy | Senior Frontend Developer",
    template: "%s | Batuhan Keskinsoy",
  },
  description:
    "Batuhan Keskinsoy'un modern, performans odaklı ve SEO uyumlu frontend çalışmalarını içeren kişisel portfolio sitesi.",
  keywords: [
    "Batuhan Keskinsoy",
    "Senior Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Performance",
    "Portfolio",
  ],
  openGraph: {
    title: "Batuhan Keskinsoy | Senior Frontend Developer",
    description:
      "Modern web ürünleri için performans, UX ve ölçeklenebilir mimari odaklı frontend portfolio.",
    url: "https://batuhankeskinsoy.com",
    siteName: "Batuhan Keskinsoy Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batuhan Keskinsoy | Senior Frontend Developer",
    description:
      "Server-first yaklaşımla geliştirilmiş modern portfolio ve frontend çalışmaları.",
  },
  alternates: {
    canonical: "/",
  },
};

type Theme = "dark" | "light";

const isTheme = (value: string | undefined): value is Theme =>
  value === "dark" || value === "light";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const initialTheme = isTheme(themeCookie) ? themeCookie : undefined;

  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
      data-theme={initialTheme}
    >
      <body className="min-h-full bg-token text-token">
        <div className="relative flex min-h-full flex-col">
          <SiteHeader initialTheme={initialTheme} />
          {children}
          <footer className="mx-auto w-full max-w-[1400px] px-6 pb-8 pt-4 text-xs text-token-muted">
            © {new Date().getFullYear()} Batuhan Keskinsoy
          </footer>
        </div>
      </body>
    </html>
  );
}
