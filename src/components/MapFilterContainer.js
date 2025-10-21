'use client';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

import Detail from "./Detail"
import Sidebar from "./Sidebar"
import defaultDetailState from '@/data/defaultDetailState.json'
import defaultFilterState from '@/data/defaultFilterState.json'

import roasters from '@/data/roasters.json'

const createDropdownRoasterArray = function (originalArray) {
    let roasterOptionArray = []
    originalArray.map((item, i) => {
        roasterOptionArray.push({ value: item.roasterID, label: item.name });
    });

    roasterOptionArray = roasterOptionArray.sort((a, b) => a.label.localeCompare(b.label));
    return roasterOptionArray;
}


const dropdownRoasterArray = createDropdownRoasterArray(roasters.roasters);


const Map = dynamic(() => import("./Map"), { ssr: false }) // disable SSR for Leaflet

export default function MapFilterContainer() {

    const [roaster, setRoaster] = useState({
        "initialRoasterID": 0, "roasterIncludedInQuery": false, "roasterSuccessfullySet": false
    });

    if (roaster.roasterIncludedInQuery && !roaster.roastersSuccessfullySet) {
        const matchingEntry = dropdownRoasterArray.filter(x => x.value === Number(roaster.initialRoasterID))[0];
        if(defaultFilterState.roasters.length === 0 && matchingEntry) {
            defaultFilterState.roasters.push(matchingEntry);
        }
    }

    const [activeItemDetails, setActiveItemDetails] = useState(defaultDetailState);
    const [filterStatus, setFilterStatus] = useState(defaultFilterState);

    const [detailWindowStatus, setActivityStatus] = useState({
        "isActive": false
    })

    const [filterWindowStatus, setFilterWindowStatus] = useState({
        "filterWindowActive": false
    })

    useEffect(() => {
        setFilterWindowStatus({
            "filterWindowActive": window.innerWidth > 900
        });
        const params = new URLSearchParams(document.location.search);
        const roasterID = params.get("roasterID");
        if (roasterID) {
            setRoaster({
                "initialRoasterID": roasterID,
                "roasterIncludedInQuery": true, "roasterSuccessfullySet": false
            });
        };


    }, []);


    return (
        <div className={'mapFilterContainer ' + (filterWindowStatus.filterWindowActive && 'activeFilterDetected')}>
            <Map stateChanger={setActiveItemDetails} detailActivator={setActivityStatus} filterStatus={filterStatus} filterWindowStatus={filterWindowStatus} setFilterWindowStatus={setFilterWindowStatus} />
            <Detail detailInfo={activeItemDetails} activityStatus={detailWindowStatus} detailActivator={setActivityStatus} stateChanger={setActiveItemDetails} />
            <Sidebar filterStatus={filterStatus} setFilterStatus={setFilterStatus} filterWindowStatus={filterWindowStatus} setFilterWindowStatus={setFilterWindowStatus} roaster={roaster} setRoaster={setRoaster} roasterArray={dropdownRoasterArray} />
        </div>
    )
}