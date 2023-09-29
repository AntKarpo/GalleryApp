import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={image} height={300} width={300} alt={title} />
      <p>Artist: {artist}</p>
    </div>
  );
}
