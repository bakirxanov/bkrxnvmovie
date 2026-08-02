import Link from "next/link";

// Shown whenever notFound() is called (e.g. an invalid movie id in the URL).
export default function NotFound() {
  return (
    <div className="container">
      <div className="empty-state">
        <h1 style={{ marginBottom: "1rem" }}>404 — Sahifa topilmadi</h1>
        <p style={{ marginBottom: "1.5rem" }}>
          Siz qidirgan sahifa mavjud emas yoki o&apos;chirilgan.
        </p>
        <Link href="/" className="back-link">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
