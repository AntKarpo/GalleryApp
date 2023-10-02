import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/layout";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
/*
  useEffect(() => {
    if (artPieces) setArtPiecesInfo(artPieces);
  }, [artPieces]);
*/
  function handleToggle(slug) {
    const favoriteArtPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    setArtPiecesInfo(
      artPiecesInfo.map((piece) =>
        favoriteArtPiece ? { ...piece, isFavorite: !piece.isFavorite } : piece
      )
    );
  }
  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;


  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggle}
        />
      </Layout>
    </>
  );
}
