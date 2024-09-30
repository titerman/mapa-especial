import { Popup } from "react-leaflet"

export default function LeafletPopUp({name, changeActiveItem, item}) {
    return (
        <Popup>
            <span className="popUpTitle">{name}</span>
            <br></br>
            <a className="learnMore" onClick={() => changeActiveItem(item)}>Ver mais&nbsp;&gt;&gt;&gt;</a>
        </Popup>
    )
}