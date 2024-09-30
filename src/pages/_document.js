'use client';
import { Html, Head, Body, Main, NextScript } from "next/document";

import Footer from "@/components/Footer";

export const metadata = {
  openGraph: {
    title: 'Mapa Especial',
    description: 'Descubra cafés especiais em São Paulo e Baixada Santista',
    url: 'https://mapaespecial.com/',
    siteName: 'Mapa Especial',
    images: [
      {
        url: 'https://mapaespecial.com/opengraph-image.png',
        width: 2036,
        height: 276,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  title: 'Mapa Especial',
  description: 'Descubra cafés especiais em São Paulo e Baixada Santista',
}

export default function Document() {

  return (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
