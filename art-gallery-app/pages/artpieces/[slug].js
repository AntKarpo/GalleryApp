import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import CommentForm from "@/Component/CommentForm/CommentForm";

export default function pieceDetails({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const { imageSource, name, artist, year, genre } = artPieces.find(
    (a) => a.slug === slug
  );
  return (
    <>
      <ArtPieceDetails
        onBack={() => router.back()}
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        isFavorite={artPiecesInfo[slug].isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
      <button onClick={() => router.back()}>Back</button>
      <CommentForm />
    </>
  );
}
