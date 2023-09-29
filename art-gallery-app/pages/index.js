import React from "react";
import Spotlight from "@/Component/Spotlight/Spotlight";

export default function SpotlightPage({artPieces}) {
 
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
