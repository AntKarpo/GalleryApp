import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <Link href={`/artpieces/${slug}`}>
        <Image src={image} height={300} width={300} alt={title} />
      </Link>
      <p>Artist: {artist}</p>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
