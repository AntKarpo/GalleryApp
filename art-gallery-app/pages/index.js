import React from 'react';
import useSWR from 'swr';
import ArtPieces from '@/Component/ArtPiece/ArtPieces';
import Spotlight from '@/Component/Spotlight/Spotlight';


const fetcher = (url) => fetch(url).then((res) => res.json());



export default function HomePage() {
  
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
  
  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;
  
  const spotlightArt = artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
   <Spotlight image={spotlightArt.imageSource} artist={spotlightArt.artist} />

   <ArtPieces pieces={artPieces} />
    </div>
  );
}
