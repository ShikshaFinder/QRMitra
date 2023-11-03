import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import QR from "./components/QR";
// import QRCodeGenerator from "./components/Qrcodegen";

export default function Home() {
  const customWords = "YourCustomWordsHere";
  return (
    <>
      <Head>
        <title>QRMitra</title>
        <meta name="QRmitra" content="QRmitra" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <QR />
      {/* <QRCodeGenerator data={customWords} /> */}
    </>
  );
}
