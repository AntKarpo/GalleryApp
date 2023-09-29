import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} height={145} width={145} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}
