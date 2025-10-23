'use client';
import { useEffect, useState } from "react";

import Head from "next/head";
import roasters from '@/data/roasters.json';
import RoasterFilter from "@/components/RoasterFilter";
import defaultRoasterFilterState from '@/data/defaultRoasterFilterState.json'
import RoasterList from "@/components/RoasterList";

import { generateNextSeo } from "next-seo/pages";
import {SoftwareApplicationJsonLd} from "next-seo";

const roasterData = roasters.roasters;

export default function Torradores() {
    const [roasterFilterState, setRoasterFilterState] = useState(defaultRoasterFilterState);

    const createDropdownRoasterArray = function () {
        let stateOptionArray = [{ value: "0", label: "Todos os Estados" }];
        const roasterStates = roasterData.map(a => a.state).filter((value, index, array) => array.indexOf(value) === index);

        roasterStates.map((item, i) => {
            stateOptionArray.push({ value: item, label: item });
        });

        stateOptionArray = stateOptionArray.sort((a, b) => a.value.localeCompare(b.value));
        return stateOptionArray;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {generateNextSeo({
                    title: "Mapa Especial | Torradores: Catálogo",
                    description: "Descubra torradores de café especial de todo o Brasil: encontre seu próximo pacote de café",
                    canonical: "https://mapaespecial.com/torradores",
                    openGraph: {
                        url: "https://mapaespecial.com/torradores",
                        title: "Mapa Especial | Torradores: Catálogo",
                        description: "Descubra torradores de café especial de todo o Brasil: encontre seu próximo pacote de café",
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
                    name="Mapa Especial: Torradores"
                    url="https://mapaespecial.com/torradores"
                    applicationCategory="Business Directory"
                    applicationSubCategory="Specialty Coffee"
                    about="O catálogo de torradores de Mapa Especial ajuda você a encontrar seu próximo pacote de café. Nosso catálogo contem torradores de todo o país com a grande variedade de cafés e entrega nacional."
                />
            </Head>
            <main className="roasterView">
                <div className="roasterBg"></div>
                <RoasterFilter setRoasterFilterState={setRoasterFilterState} roasterFilterState={roasterFilterState} roasterStates={createDropdownRoasterArray()} />
                <RoasterList roasterFilterState={roasterFilterState} roasterData={roasterData} />
            </main>
        </>
    );
}