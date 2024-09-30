import { Icon } from "leaflet";

const beanIcon = new Icon({
    iconUrl: '/icons/bean.svg',
    iconSize: [35, 35], // size of the icon
})

const cafeIcon = new Icon({
    iconUrl: '/icons/coffee.svg',
    iconSize: [35, 35], // size of the icon
})

const userLocationIcon = new Icon({
    iconUrl: '/icons/circle.svg',
    iconSize: [35, 35], // size of the icon
})

export {beanIcon, cafeIcon, userLocationIcon};