import React from 'react';

export default function Spotlight({ image, artist }) {

    return (
    <div>
      <h2>Spotlight Piece</h2>
      <img src={image} alt={`spotlight: ${artist}`} />
      <p>Artist: {artist}</p>
    </div>
  );
}

 
