import React from "react";
import Spotlight from "@/Component/Spotlight/Spotlight";

export default function SpotlightPage({ artPieces, onToggleFavorite }) {
  const randomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        isFavorite={artPieces.isFavorite}
        onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
      />
    </div>
  );
}
