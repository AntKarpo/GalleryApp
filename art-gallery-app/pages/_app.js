import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;
  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component {...pageProps} artPieces={artPieces} />
      </Layout>
    </>
  );
}
