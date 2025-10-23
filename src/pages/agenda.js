'use client';
import Head from "next/head";
import events from '@/data/events.json';

import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import brLocale from '@fullcalendar/core/locales/pt-br';


import { generateNextSeo } from "next-seo/pages";
import {SoftwareApplicationJsonLd} from "next-seo";

export default function Agenda() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {generateNextSeo({
                    title: "Mapa Especial | Agenda",
                    description: "Descubra eventos do mercado de café especial em São Paulo: encontre seu próximo cupping aqui!",
                    canonical: "https://mapaespecial.com/agenda",
                    openGraph: {
                        url: "https://mapaespecial.com/agenda",
                        title: "Mapa Especial | Agenda",
                        description: "Descubra eventos do mercado de café especial em São Paulo: encontre seu próximo cupping aqui!",
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
                    name="Mapa Especial: Agenda"
                    url="https://mapaespecial.com/agenda"
                    applicationCategory="Event Calendar"
                    applicationSubCategory="Specialty Coffee"
                    about="O agenda de Mapa Especial ajuda você a encontrar seu próximo evento do mundo de cafés especiais. Cuppings, degustações, bate-papos e palestros com especialistas de mercado — somente eventos presenciais em São Paulo."
                />
            </Head>
            <main className="calendarView">
                <FullCalendar
                    plugins={[listPlugin]}
                    initialView="listYear"
                    events={events}
                    locale={brLocale}
                    initialDate={"2026-01-01T00:00:00"}
                />
            </main>
        </>)
};