import ArtPieces from "@/Component/ArtPiece/ArtPieces";

export default function favorite({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favArtPieces = artPieces.filter((artPiece) => {
    return !!artPiecesInfo[artPiece.slug]?.isFavorite;
  });

  return (
    <>
      <ArtPieces
        pieces={favArtPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
