'use client';
import Head from "next/head";
import events from '@/data/events.json';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import brLocale from '@fullcalendar/core/locales/pt-br';

export default function Agenda() {
    return (
        <>
            <Head>
                <title>Mapa Especial | Agenda </title>
                <meta name="description" content="Descubra cafés especiais em São Paulo e Baixada Santista" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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