const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export async function getPronunciationAudio(word) {
  const wordForPath = word.trim().toLowerCase();
  try {
    const response = await fetch(DICTIONARY_API_URL + wordForPath);
    if (response.ok) {
      const data = await response.json();
      const pronunciationAudio = data[0]["phonetics"][0]["audio"];
      console.log("getPronunciationAudio: ", pronunciationAudio);
      return pronunciationAudio;
    } else {
      console.log("Couldn't find word");
      return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
