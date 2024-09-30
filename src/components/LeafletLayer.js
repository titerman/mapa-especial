import { findMatchingEntries } from "@/scripts/findMatchingEntries.js"
import { activeLayerDetector } from "@/scripts/activeLayerDetector.js"
import { Marker } from "react-leaflet";
import LeafletPopUp from "./LeafletPopUp";
import { beanIcon, cafeIcon } from './Icons';

export default function LeafletLayer({ activeFilters, filterCriterion, sourceArray, changeActiveItem }) {

    const determineMarkerIcon = function (filterCriterion) {
        if (filterCriterion === "shops") {
            return beanIcon;
        } else {
            return cafeIcon;
        }
    }

    return (
        <>
            {activeLayerDetector(activeFilters, filterCriterion) &&
                findMatchingEntries(activeFilters, sourceArray).map((item, i) => (
                    <Marker position={item.geometry.coordinates} key={i} icon={determineMarkerIcon(filterCriterion)}>
                        <LeafletPopUp name={item.properties.name} changeActiveItem={changeActiveItem} item={item} />
                    </Marker>
                ))
            }
        </>
    )
}