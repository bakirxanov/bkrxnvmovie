import CatalogGrid from "@/components/CatalogGrid";
import { getAllPremieres } from "@/lib/data/premieres";

export default function PremieresPage() {
  const premieres = getAllPremieres();

  return (
    <div className="container">
      <h1 className="page-title">Premyeralar</h1>
      <CatalogGrid items={premieres} category="premieres" emptyLabel="Hozircha premyeralar mavjud emas." />
    </div>
  );
}
