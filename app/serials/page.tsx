import CatalogGrid from "@/components/CatalogGrid";
import { getAllSerials } from "@/lib/data/serials";

export default function SerialsPage() {
  const serials = getAllSerials();

  return (
    <div className="container">
      <h1 className="page-title">Seriallar</h1>
      <CatalogGrid items={serials} category="serials" emptyLabel="Hozircha seriallar mavjud emas." />
    </div>
  );
}
