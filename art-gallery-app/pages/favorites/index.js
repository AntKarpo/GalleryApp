import ArtPieces from "@/Component/ArtPiece/ArtPieces";


export default function favorite({
  artPieces,
  artPiecesInfo,
  onToggleFavorite
}) {
  console.log("artPieces", artPieces);
  console.log("artPiecesInfo", artPiecesInfo);
  const favArtPieces = artPieces.filter((artPiece) =>
  artPiecesInfo.find(
     (artPieceInfo) =>
       artPieceInfo.slug === artPiece.slug && artPieceInfo.isFavorite
  )
 );

  return (
    <>
      <ArtPieces 
        pieces={favArtPieces} 
        artPieceInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        s
      /> 
    </>
  );
}
