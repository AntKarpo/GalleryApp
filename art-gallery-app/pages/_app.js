import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: {} }
  );
  function Comment(slug, newComment) {
    updateArtPiecesInfo((draft) => {
     
      if (!draft[slug]) {
        draft[slug] = { isFavorite: false, comments: [] };
      }
      
      draft[slug].comments.push(newComment);
    });
  }

  function handleToggle(slug) {
    updateArtPiecesInfo((draft) => {
   
      if (!draft[slug]) {
        draft[slug] = { isFavorite: false, comments: [] };
      }
    
      draft[slug].isFavorite = !draft[slug].isFavorite;
    });
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggle}
          Comment={Comment}
        />
      </Layout>
    </>
  );
}
