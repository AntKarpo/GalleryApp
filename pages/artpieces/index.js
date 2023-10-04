import ArtPieces from "@/Component/ArtPiece/ArtPieces";

export default function artPiecesPage({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <div>
      <ArtPieces
        pieces={artPieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
