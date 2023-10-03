import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import CommentForm from "@/Component/CommentForm/CommentForm";

export default function pieceDetails({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
  onComment,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const { imageSource, name, artist, year, genre, colors } = artPieces.find(
    (a) => a.slug === slug
  );

  const onSubmitComment = (comment) => {
    onComment(slug, comment);
  };
  return (
    <>
      <ArtPieceDetails
        onBack={() => router.back()}
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        colors={colors}
        isFavorite={artPiecesInfo[slug]?.isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
        onComment={onSubmitComment}
        comments={artPiecesInfo[slug]?.comments}
      />
      <button onClick={() => router.back()}>Back</button>
      <CommentForm />
    </>
  );
}
