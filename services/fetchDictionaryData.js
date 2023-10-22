const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export async function getPronunciationAudio(word) {
  const wordForPath = word.trim().toLowerCase();
  try {
    const response = await fetch(DICTIONARY_API_URL + wordForPath);
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Daten");
    }
    const data = await response.json();
    const pronunciationAudio = "";
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
