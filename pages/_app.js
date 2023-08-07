import GlobalStyle from "../styles";
import Head from "next/head";
// import {Cutive, Inter } from "next/font/google";

// const cutive = Cutive({
//   subsets: ["latin"],
//   weight: "400",
// });
// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500"],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Voc-Trainer</title>
      </Head>
      {/* <style jsx global>{`
        :root {
          --fontfamily-regular: ${inter.style.fontFamily};
          --fontfamily-special: ${cutive.style.fontFamily};
        }
      `}</style> */}
      <Component {...pageProps} />
    </>
  );
}
