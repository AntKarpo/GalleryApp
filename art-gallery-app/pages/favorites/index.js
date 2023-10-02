import ArtPieces from "@/Component/ArtPiece/ArtPieces";
import FavoriteButton from "@/Component/FavoriteButton/FavoriteButton";

export default function favorite(
  artPieces,
  artPiecesInfo,
  isFavorite,
  onToggleFavorite
) {
  console.log("artPieces", artPieces);
  // // const favArtPieces = artPieces.filter((artPiece) =>
  //   artPiecesInfo.find(
  // //     (artPieceInfo) =>
  // //       artPieceInfo.slug === artPiece.slug && artPieceInfo.isFavorite
  // //   )
  // );

  return (
    <>
      {/* <ArtPieces pieces={favArtPieces} />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        s
      /> */}
    </>
  );
}
