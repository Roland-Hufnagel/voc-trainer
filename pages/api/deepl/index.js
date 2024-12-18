import * as deepl from "deepl-node";

const authKey = process.env.DEEPL_API_KEY;
const translator = new deepl.Translator(authKey);

export default async function handler(request, response) {
  console.log("in api route", authKey);
  const result = await translator.translateText(
    request.body.toLowerCase(),
    "en",
    "de"
  );
  response.status(200).json(result.text);
}
