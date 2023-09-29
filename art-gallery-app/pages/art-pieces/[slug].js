import ArtPieceDetail from "@/Component/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FindArtPage(artPieces){
 const [artPieceFound, setartPieceFound] = useState();
  const router =useRouter();
  const {slug} =router.query;
  
  useEffect(() => {
  if (artPieces.length >0) setartPieceFound(artPieces.find((piece) => piece.slug === slug));
  }, [ artPieces, slug]);


  if (!artPieces) return

    return (
        <div>
       <ArtPieceDetail
        onBack={() => router.back()}
      image={artPieceFound.imageSource}
      title={artPieceFound.name}
      artist={artPieceFound.artist}
      year={artPieceFound.year}
      genre={artPieceFound.genre}/>

      <button onClick={() => router.back()}>Back</button>
      </div>
    )
}