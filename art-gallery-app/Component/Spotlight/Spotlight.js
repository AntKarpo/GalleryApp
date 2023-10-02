import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";


export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image
        src={image}
        height={400}
        width={400}
        alt={`spotlight: ${artist}`}
      />
      <p>Artist: {artist}</p>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
