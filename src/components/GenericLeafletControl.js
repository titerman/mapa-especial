import L from "leaflet";
import React, { useEffect, useRef } from "react";

const ControlClasses = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};


const GenericLeafletControl = ({
  position,
  children,
}) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      L.DomEvent.disableClickPropagation(divRef.current);
      L.DomEvent.disableScrollPropagation(divRef.current);
    }
  });

  return (
    <div ref={divRef} className={position && ControlClasses[position]}>
      <div className={"leaflet-control"}>{children}</div>
    </div>
  );
};

export default GenericLeafletControl;