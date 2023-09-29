import React from 'react';

function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}

export default ArtPiecePreview;
