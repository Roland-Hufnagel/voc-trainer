const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export async function getPronunciationAudio(word) {
  const wordForPath = word.trim().toLowerCase();
  try {
    const response = await fetch(DICTIONARY_API_URL + wordForPath);
    if (response.ok) {
      const data = await response.json();
      const urls = extractAudioLinks(data);
      return addCountryCodesToLinks(urls);
    }
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function extractAudioLinks(data) {
  const phonetics = data.flatMap((item) => item.phonetics);
  const audioLinks = phonetics
    .map((phonetic) => phonetic.audio)
    .filter((audio) => audio);
  return audioLinks;
}

function addCountryCodesToLinks(urls) {
  const linksWithCountryCodes = urls.map((url) => {
    const country = url.slice(-6, -4).toUpperCase();
    return {
      countryCode: country,
      url: url,
    };
  });
  return linksWithCountryCodes;
}
