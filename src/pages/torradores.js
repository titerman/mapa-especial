'use client';
import { useEffect, useState } from "react";

import Head from "next/head";
import roasters from '@/data/roasters.json';
import RoasterFilter from "@/components/RoasterFilter";
import defaultRoasterFilterState from '@/data/defaultRoasterFilterState.json'
import RoasterList from "@/components/RoasterList";

const roasterData = roasters.roasters;
console.log(roasterData.length)

export default function Torradores() {
    const [roasterFilterState, setRoasterFilterState] = useState(defaultRoasterFilterState);

    const createDropdownRoasterArray = function () {
        let stateOptionArray = [{value: "0", label: "Todos os Estados"}];
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
                <title>Mapa Especial | Torradores </title>
                <meta name="description" content="Descubra cafés especiais em São Paulo e Baixada Santista" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="roasterView">
                <div className="roasterBg"></div>
                <RoasterFilter setRoasterFilterState={setRoasterFilterState} roasterFilterState={roasterFilterState} roasterStates={createDropdownRoasterArray()} />
                <RoasterList roasterFilterState={roasterFilterState} roasterData={roasterData} />
            </main>
        </>
    );
}