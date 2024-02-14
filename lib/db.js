import { nanoid } from "nanoid";

const initialSettings = [
  {
    name: "numCardsToPick",
    label: "Cards per game",
    description: "Specify the number of cards you want to have shown per game",
    value: 5,
  },
  {
    name: "hitsToWin",
    label: "Iterations to win",
    description:
      "Specify how many times you must mark a card as answered correctly for it to be considered 'learned' and not shown to you again.",
    value: 3,
  },
];

const vocs = [
  {
    id: nanoid(),
    word: "love",
    translation: "Liebe",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "UK",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/love-uk.mp3",
      },
    ],
  },
  {
    id: nanoid(),
    word: "peace",
    translation: "Frieden",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "UK",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/peace-uk.mp3",
      },
    ],
  },
  {
    id: nanoid(),
    word: "happiness",
    translation: "Zufriedenheit",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "US",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/happiness-us.mp3",
      },
    ],
  },
];

export { initialSettings, vocs };
