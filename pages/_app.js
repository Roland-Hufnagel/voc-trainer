import GlobalStyle from "../styles";
import Head from "next/head";

import useLocalStorageState from "use-local-storage-state";
import { vocs, initialSettings } from "../lib/db";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: vocs,
  });
  const [settings, setSettings] = useLocalStorageState("voc_settings", {
    defaultValue: initialSettings,
  });
  function handleChangeSettings(name, newValue) {
    setSettings((prev) => {
      return prev.map((setting) =>
        setting.name === name ? { ...setting, value: newValue } : setting
      );
    });
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
          {...{ cards, setCards, settings, handleChangeSettings }}
        />
      </Layout>
    </>
  );
}
