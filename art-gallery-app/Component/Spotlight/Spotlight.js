import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
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
    </div>
  );
}
