import ArtPieceDetails from "../../Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function pieceDetails({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
console.log("slug",slug);
  const { imageSource, title, artist, year, genre } = artPieces.find(
    (a) => a.slug === slug
  );
  return (
    <>
    <ArtPieceDetails
      onBack={() => router.back()}
      image={imageSource}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
      />
       <button onClick={() => router.back()}>Back</button>
      </>
      );
}