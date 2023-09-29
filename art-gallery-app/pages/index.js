import React from "react";
import useSWR from "swr";
import ArtPieces from "@/Component/ArtPiece/ArtPieces";
import Spotlight from "@/Component/Spotlight/Spotlight";

export default function SpotlightPage({ artPieces }) {
  const RandomsArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <Spotlight
        image={RandomsArtPiece.imageSource}
        artist={RandomsArtPiece.artist}
      />
    </div>
  );
}
