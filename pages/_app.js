import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { vocs } from "../lib/db";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Voc-Trainer</title>
      </Head>
      <Component {...pageProps} {...{ cards, setCards }} />
    </>
  );
}
