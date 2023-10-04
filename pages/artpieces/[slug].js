import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import styles from "./[slug].module.css";
import Image from "next/image";

export default function pieceDetails({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
  onComment,
  onDelete
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
      <button onClick={() => router.back()} className={styles["back-btn"]}>
       <Image className={styles["back-btn"]} src="/assets/Arrow.png" width={60} height={40} alt="arrow"/>
      </button>
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
        onDelete={onDelete}
      />
    </>
  );
}
