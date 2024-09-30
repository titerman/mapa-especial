import Head from "next/head";
import MapFilterContainer from '@/components/MapFilterContainer';
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Mapa Especial</title>
        <meta name="description" content="Descubra cafés especiais em São Paulo e Baixada Santista" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <MapFilterContainer />
      </main>
    </>
  );
}