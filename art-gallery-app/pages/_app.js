import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/layout";
import Header from "@/Component/Header/Header";
import Footer from "@/Component/Footer/Footer";

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
  function handleComment(slug, newComment) {
    const draft = { ...artPiecesInfo };
    if (!draft[slug]) {
      draft[slug] = { isFavorite: false, comments: [] };
    }

    draft[slug].comments.push(newComment);
    updateArtPiecesInfo(draft);
  }

  function handleToggle(slug) {
    const draft = { ...artPiecesInfo };
      if (!draft[slug]) {
        draft[slug] = { isFavorite: false, comments: [] };
      }

      draft[slug].isFavorite = !draft[slug].isFavorite;
      updateArtPiecesInfo(draft);
    }

    function onDeleteComment(slug, commentIndex) {
      const draft = { ...artPiecesInfo };
      if (draft[slug] && draft[slug].comments) {
        draft[slug].comments = draft[slug].comments.filter(
          (comment, index) => index !== commentIndex
        );
    
        updateArtPiecesInfo(draft);
      }
    }
    

  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;
  return (
    <Layout>
      <Header />
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggle}
        onComment={handleComment}
        onDelete={onDeleteComment}
      />
      <Footer />
    </Layout>
  );
}