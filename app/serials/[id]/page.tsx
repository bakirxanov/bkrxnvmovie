import { notFound } from "next/navigation";
import SerialDetail from "@/components/SerialDetail";
import { getSerialById } from "@/lib/data/serials";

export default async function SerialDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const serial = getSerialById(Number(id));

  if (!serial) {
    notFound();
  }

  return <SerialDetail serial={serial} />;
}
