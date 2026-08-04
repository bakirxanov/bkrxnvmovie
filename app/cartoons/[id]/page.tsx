import { notFound } from "next/navigation";
import MovieDetail from "@/components/MovieDetail";
import { getCartoonById } from "@/lib/data/cartoons";

export default async function CartoonDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cartoon = getCartoonById(Number(id));

  if (!cartoon) {
    notFound();
  }

  return <MovieDetail movie={cartoon} backHref="/cartoons" backLabel="Multfilmlarga qaytish" />;
}
