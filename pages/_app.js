import GlobalStyle from "../styles";
import Head from "next/head";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import useLocalStorageState from "use-local-storage-state";
import { vocs, initialSettings } from "../lib/db";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [playedIds, setPlayedIds] = useState([]);

  const [cards, setCards] = useLocalStorageState("cards-new", {
    defaultValue: vocs,
  });
  const [settings, setSettings] = useLocalStorageState("voc_settings", {
    defaultValue: initialSettings,
  });

  const NUM_CARDS_TO_PICK = settings.find(
    (setting) => setting.name === "numCardsToPick"
  ).value;
  const HITS_TO_WIN = settings.find(
    (setting) => setting.name === "hitsToWin"
  ).value;

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

  useEffect(() => {
    shuffleCards();
  }, []);

  // Shuffle all cards
  function shuffleCards() {
    setCards((prev) => prev.sort(() => 0.5 - Math.random()));
  }

  // Reduces the length of 'playCards' array to limit the amount of rendered cards.
  function limitCardsToShow(availableCards) {
    const numberOfCardsToShow = NUM_CARDS_TO_PICK - playedIds.length;
    return availableCards.slice(0, numberOfCardsToShow);
  }

  // Adds card's ID zu playedCards Array and if answer is correct, increases a card's correct answer count by 1.
  function handleResult(id, answerIsCorrect) {
    setTimeout(() => {
      setPlayedIds((prevPlayedIds) => [...prevPlayedIds, id]);
      if (answerIsCorrect) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === id ? { ...card, hits: card.hits + 1 } : card
          )
        );
      }
    }, 800);
  }

  // Increases a card's views counter by 1.
  function handleView(id) {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, views: card.views + 1 } : card
      )
    );
  }

  // Starts a new game
  function playNewGame() {
    setPlayedIds([]);
    shuffleCards();
  }

  // Contains only the cards that have less "hits" than "HITS_TO_WIN"
  // and that have not yet been played in the session
  const availableCards = cards.filter((card) => {
    return card.hits < HITS_TO_WIN && !playedIds.includes(card.id);
  });

  const cardsToShow = limitCardsToShow(availableCards);
  function handleChangeCard(updatedCard) {
    setCards((prev) =>
      prev.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  }
  function handleDeleteCard(id) {
    setCards((prev) => prev.filter((card) => card.id !== id));
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
            handleChangeCard,
            handleDeleteCard,
            handleAddNewWord,
            cardsToShow,
            handleResult,
            handleView,
            playNewGame,
            playedIds,
          }}
        />
      </Layout>
    </>
  );
}
