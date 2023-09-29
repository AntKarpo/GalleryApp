import React from 'react';

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}

