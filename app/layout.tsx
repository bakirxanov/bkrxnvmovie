import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "BkrxnvMovie — Kino, serial va multfilmlar",
  description:
    "BkrxnvMovie — o'zbek tilida kinolar, seriallar, multfilmlar va premyeralarni bepul tomosha qiling.",
};

// This layout wraps every page in the app (it's the root layout for App Router).
// It renders a shared header (with navigation + search) and a slim footer.
// Fonts: Bebas Neue for display/headings, Inter for body text.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <strong>BkrxnvMovie</strong> — har kecha tomosha qilishga arzigulik kinolar.
        </footer>
      </body>
    </html>
  );
}
