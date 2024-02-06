import * as deepl from "deepl-node";

const authKey = process.env.DEEPL_API_KEY;
const translator = new deepl.Translator(authKey);

export default async function handler(req, res) {
  const result = await translator.translateText(req.body, null, "de");
  res.status(200).json(result.text);
}
