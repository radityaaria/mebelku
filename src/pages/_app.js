import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Mebel Mbah Kayyun</title>
        <meta name="description" content="Toko Mebel Terpercaya di Yogyakarta" />
      </Head>
      <Navbar /> {/* Menambahkan komponen Navbar */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
