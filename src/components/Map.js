'use client';
import { useEffect, useState } from "react";

import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import MarkerClusterGroup from 'react-leaflet-cluster';
import { MapContainer, TileLayer, useMap, AttributionControl, ZoomControl, Marker } from "react-leaflet";

import "leaflet-active-area";

import cafes from '@/data/cafes.json';
import shops from '@/data/shops.json';
import { determineActiveFilters } from "@/scripts/determineActiveFilters";

import PositionButton from "./PositionButton";
import FilterToggler from "./FilterToggler";
import LeafletLayer from "./LeafletLayer";

const position = [-23.69758019515442, -46.51164347336386]

import { userLocationIcon } from './Icons';

const ActiveMapArea = () => {
    const map = useMap();

    useEffect(() => {
        map?.setActiveArea("activeArea", true);
    }, [map]);

    return (<></>);
};

export default function Map({ stateChanger, detailActivator, filterStatus, filterWindowStatus, setFilterWindowStatus }) {

    const changeActiveItem = function (item) {
        detailActivator({ "isActive": true });
        stateChanger(item);
    }

    const activeFilters = determineActiveFilters(filterStatus);

    const [userLocation, setUserLocation] = useState({
        found: false,
        coordinates: []
    })

    return (
        <>
            <MapContainer center={position} zoom={10} className="leafletMap" style={{ height: "80vh", minHeight: "500px", width: "100%" }} attributionControl={false} zoomControl={false}>
                <ActiveMapArea />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    position="bottomleft"
                />
                <AttributionControl position="bottomleft" />
                <ZoomControl position="topleft" className="zoomButtons" />
                <PositionButton setUserLocation={setUserLocation} />
                <FilterToggler filterWindowStatus={filterWindowStatus} setFilterWindowStatus={setFilterWindowStatus} />
                {userLocation.found && <Marker position={userLocation.coordinates} icon={userLocationIcon} />}
                <MarkerClusterGroup
                    animate chunkedLoading
                >
                    <LeafletLayer activeFilters={activeFilters} filterCriterion={'cafes'} sourceArray={cafes.features} changeActiveItem={changeActiveItem} />
                    <LeafletLayer activeFilters={activeFilters} filterCriterion={'shops'} sourceArray={shops.features} changeActiveItem={changeActiveItem} />
                </MarkerClusterGroup>
            </MapContainer >
        </>
    )
};

