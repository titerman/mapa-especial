import GenericLeafletControl from "./GenericLeafletControl"
export default function FilterToggler({ filterWindowStatus, setFilterWindowStatus }) {

    const toggler = function () {
        if (filterWindowStatus.filterWindowActive) {
            setFilterWindowStatus({
                "filterWindowActive": false
            });
        } else {
            setFilterWindowStatus({
                "filterWindowActive": true
            });
        }
    }

    return (
        <GenericLeafletControl position={"topright"}>
            <div
                className="filterToggler"
                onClick={toggler}
                variant={"transparent"} >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,80a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H192A8,8,0,0,1,184,80ZM40,88h96v16a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8V72H40a8,8,0,0,0,0,16Zm176,80H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM96,144H80a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H72v16a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V152A8,8,0,0,0,96,144Z"></path></svg>
            </div>
        </GenericLeafletControl >
    )
}