'use client';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import Detail from "./Detail"
import Sidebar from "./Sidebar"
import defaultDetailState from '@/data/defaultDetailState.json'
import defaultFilterState from '@/data/defaultFilterState.json'

const Map = dynamic(() => import("./Map"), { ssr: false }) // disable SSR for Leaflet

export default function MapFilterContainer() {
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
    }, []);

    return (
        <div className={'mapFilterContainer ' + (filterWindowStatus.filterWindowActive && 'activeFilterDetected')}>
            <Map stateChanger={setActiveItemDetails} detailActivator={setActivityStatus} filterStatus={filterStatus} filterWindowStatus={filterWindowStatus} setFilterWindowStatus={setFilterWindowStatus} />
            <Detail detailInfo={activeItemDetails} activityStatus={detailWindowStatus} detailActivator={setActivityStatus} stateChanger={setActiveItemDetails} />
            <Sidebar filterStatus={filterStatus} setFilterStatus={setFilterStatus} filterWindowStatus={filterWindowStatus} setFilterWindowStatus={setFilterWindowStatus} />
        </div>
    )
}