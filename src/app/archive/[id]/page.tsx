import { MOCK_ANIME } from "@/data/mockAnime";
import ArchiveClient from "./ArchiveClient";

export async function generateStaticParams() {
  return MOCK_ANIME.map((anime) => ({
    id: anime.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ArchiveClient id={id} />;
}
