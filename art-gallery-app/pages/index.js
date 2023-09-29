import useSWR from 'swr';
import ArtPieces from '@/Component/ArtPieces';


const fetcher = (url) => fetch(url).then((res) => res.json());

function HomePage() {

  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <div>
     
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

export default HomePage;
