import React from "react";
import useSWR from "swr";
import ArtPieces from "@/Component/ArtPiece/ArtPieces";
import Spotlight from "@/Component/Spotlight/Spotlight";

export default function SpotlightPage() {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;

  const spotlightArt = artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <Spotlight
        image={spotlightArt.imageSource}
        artist={spotlightArt.artist}
      />
    </div>
  );
}
