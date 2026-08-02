"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Small reusable mark used in the logo — the site's signature visual motif,
// echoed again in the nav underline and hero glow.
function LightningBolt({ size = 22 }: { size?: number }) {
  return (
    <svg
      className="logo-bolt"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="boltGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe38a" />
          <stop offset="55%" stopColor="#eab13c" />
          <stop offset="100%" stopColor="#9a6a12" />
        </linearGradient>
      </defs>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="url(#boltGradient)" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/movies", label: "Kinolar" },
  { href: "/serials", label: "Seriallar" },
  { href: "/cartoons", label: "Multfilmlar" },
  { href: "/premieres", label: "Premyeralar" },
];

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    setMenuOpen(false);
    if (trimmed.length > 0) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <header className="site-header">
      <div className="site-header-row">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <LightningBolt />
          <span className="logo-text">
            <span className="logo-text-main">Bkrxnv</span>
            <span className="logo-text-accent">Movie</span>
          </span>
        </Link>

        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <form className="nav-search" onSubmit={handleSearchSubmit} role="search">
          <SearchIcon />
          <input
            type="search"
            placeholder="Kino, serial yoki multfilm qidirish..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Qidiruv"
          />
        </form>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-panel">
          <form className="nav-search nav-search-mobile" onSubmit={handleSearchSubmit} role="search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Qidirish..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Qidiruv"
            />
          </form>
          <nav className="mobile-nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
