import CatalogGrid from "@/components/CatalogGrid";
import { getAllCartoons } from "@/lib/data/cartoons";

export default function CartoonsPage() {
  const cartoons = getAllCartoons();

  return (
    <div className="container">
      <h1 className="page-title">Multfilmlar</h1>
      <CatalogGrid items={cartoons} category="cartoons" emptyLabel="Hozircha multfilmlar mavjud emas." />
    </div>
  );
}
