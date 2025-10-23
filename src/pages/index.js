import Head from "next/head";
import MapFilterContainer from '@/components/MapFilterContainer';
import { generateNextSeo } from "next-seo/pages";
import {SoftwareApplicationJsonLd} from "next-seo";

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {generateNextSeo({
          title: "Mapa Especial — Cafeterias e Torradores na Grande São Paulo e Baixada Santista",
          description: "Descubra cafeterias, torradores, e lojas com café especial de órigem única e ética.",
          canonical: "https://mapaespecial.com",
          openGraph: {
            url: "https://mapaespecial.com",
            title: "Mapa Especial — Cafeterias e Torradores na Grande São Paulo e Baixada Santista",
            description: "Descubra cafeterias, torradores, e lojas com café especial de órigem única e ética.",
            images: [
              {
                url: "https://mapaespecial.com/full-logo.png",
                width: 2036,
                height: 276,
                alt: "Mapa Especial — Logo",
              },
            ],
          },
        })}
        <SoftwareApplicationJsonLd
          type="WebApplication"
          name="Mapa Especial: Cafeterias e Lojas"
          url="https://mapaespecial.com"
          applicationCategory="Maps"
          applicationSubCategory="Specialty Coffee"
          about="O mapa especial ajuda você a encontrar sua próxima parada no mundo do café especial. Descubra cafeterias e lojas com café especial de órigem única e ética."
        />
      </Head>
      <main>
        <MapFilterContainer />
      </main>
    </>
  );
}