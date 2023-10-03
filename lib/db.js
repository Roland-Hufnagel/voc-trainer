import { nanoid } from "nanoid";

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

const vocs = [
  {
    id: nanoid(),
    word: "coercion",
    translation: "Nötigung",
    hits: 10,
    views: 15,
  },
  {
    id: nanoid(),
    word: "destinguish",
    translation: "unterscheiden",
    hits: 2,
    views: 20,
  },
  {
    id: nanoid(),
    word: "abbreviations",
    translation: "Abkürzungen",
    hits: 20,
    views: 30,
  },
  {
    id: nanoid(),
    word: "cumbersome",
    translation: "umständlich",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "to get rid of",
    translation: "etwas los werden",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "approach",
    translation: "Ansatz",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "emphasis",
    translation: "Hervorhebung",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "to force",
    translation: "zwingen",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "adjacent",
    translation: "benachbart",
    hits: 0,
    views: 0,
  },
  {
    id: nanoid(),
    word: "facilitate",
    translation: "erleichtern",
    hits: 0,
    views: 0,
  },
];

export {initialSettings, vocs}