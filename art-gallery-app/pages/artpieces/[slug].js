import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function pieceDetails({ artPieces }) {
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
      />
       <button onClick={() => router.back()}>Back</button>
      </>
      );
}