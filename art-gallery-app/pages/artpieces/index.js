import ArtPieces from "@/Component/ArtPiece/ArtPieces";

export default function artPiecesPage({ artPieces }) {
  return (
    <div>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
