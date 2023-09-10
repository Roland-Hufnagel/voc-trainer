import GlobalStyle from "../styles";
import Head from "next/head";

import useLocalStorageState from "use-local-storage-state";
import { vocs } from "../lib/db";

import Layout from "../components/Layout";

const initialSettings = [
  {
    name: "numCardsToPick",
    label: "Cards per game:",
    value: 5,
  },
  {
    name: "hitsToWin",
    label: "Iterations to win:",
    value: 3,
  },
];

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  const [settings, setSettings] = useLocalStorageState("voc_settings", {
    defaultValue: initialSettings,
  });

  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Voc-Trainer</title>
      </Head>

      <Layout>
        <Component
          {...pageProps}
          {...{ cards, setCards, settings, setSettings }}
        />
      </Layout>
    </>
  );
}
