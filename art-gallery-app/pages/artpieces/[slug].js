import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function pieceDetails({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const { imageSource, title, artist, year, genre } = artPieces.find(
    (a) => a.slug === slug
  );
  return (
    <ArtPieceDetails
      image={imageSource}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
