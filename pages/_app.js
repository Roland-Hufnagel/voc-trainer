import GlobalStyle from "../styles";
import Head from "next/head";
import { nanoid } from "nanoid";

import useLocalStorageState from "use-local-storage-state";
import { vocs, initialSettings } from "../lib/db";
import { useEffect } from "react";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  const [settings, setSettings] = useLocalStorageState("voc_settings", {
    defaultValue: initialSettings,
  });

  useEffect(() => {
    shuffleCards();
  }, []);

  // Shuffle all cards
  function shuffleCards() {
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }


  function handleChangeSettings(name, newValue) {
    setSettings((prev) => {
      return prev.map((setting) =>
        setting.name === name ? { ...setting, value: newValue } : setting
      );
    });
  }
  function handleAddNewWord(word, translation) {
    setCards((prev) => [
      ...prev,
      { id: nanoid(), word, translation, hits: 0, views: 0 },
    ]);
  }
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Voc-Trainer</title>
      </Head>

      <Layout>
        <Component
          {...pageProps}
          {...{
            cards,
            setCards,
            settings,
            handleChangeSettings,
            handleAddNewWord,
          }}
        />
      </Layout>
    </>
  );
}
