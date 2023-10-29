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
    word: "Dog",
    translation: "Hund",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "UK",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/dog-uk.mp3",
      },
      {
        countryCode: "US",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/dog-us.mp3",
      },
    ],
  },
  {
    id: nanoid(),
    word: "girl",
    translation: "Mädchen",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "US",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/girl-us.mp3",
      },
    ],
  },
  {
    id: nanoid(),
    word: "house",
    translation: "Haus",
    hits: 0,
    views: 0,
    audios: [
      {
        countryCode: "CA",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/house-1-ca.mp3",
      },
      {
        countryCode: "UK",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/house-1-uk.mp3",
      },
      {
        countryCode: "US",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/house-1-us.mp3",
      },
      {
        countryCode: "US",
        url: "https://api.dictionaryapi.dev/media/pronunciations/en/house-2-us.mp3",
      },
      
    ],
  },
  {
    id: nanoid(),
    word: "No audio",
    translation: "Kein Audio",
    hits: 0,
    views: 0,
    audios: [],
  },
  {
    id: nanoid(),
    word: "No audios at all",
    translation: "Überhaupt kein Audio",
    hits: 0,
    views: 0,
  },
  /*
  {
    id: nanoid(),
    word: "coercion",
    translation: "Nötigung",
    hits: 10,
    views: 15,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/coercion-us.mp3",
  },
  {
    id: nanoid(),
    word: "distinguish",
    translation: "unterscheiden",
    hits: 2,
    views: 20,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/distinguish-us.mp3",
  },
  {
    id: nanoid(),
    word: "abbreviations",
    translation: "Abkürzungen",
    hits: 20,
    views: 30,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/abbreviation-uk.mp3",
  },
  {
    id: nanoid(),
    word: "cumbersome",
    translation: "umständlich",
    hits: 0,
    views: 0,
    audio: "",
  },
  {
    id: nanoid(),
    word: "to get rid of",
    translation: "etwas los werden",
    hits: 0,
    views: 0,
    audio: "",
  },
  {
    id: nanoid(),
    word: "approach",
    translation: "Ansatz",
    hits: 0,
    views: 0,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/approach-us.mp3",
  },
  {
    id: nanoid(),
    word: "emphasis",
    translation: "Hervorhebung",
    hits: 0,
    views: 0,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/emphasis-us.mp3",
  },
  {
    id: nanoid(),
    word: "to force",
    translation: "zwingen",
    hits: 0,
    views: 0,
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/force-us.mp3",
  },
  {
    id: nanoid(),
    word: "adjacent",
    translation: "benachbart",
    hits: 0,
    views: 0,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/adjacent-au.mp3",
  },
  {
    id: nanoid(),
    word: "facilitate",
    translation: "erleichtern",
    hits: 0,
    views: 0,
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/facilitate-us.mp3",
  },
*/
];

export { initialSettings, vocs };
