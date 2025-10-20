import RoasterDetail from "@/components/RoasterDetail";

export default function RoasterList({ roasterFilterState, roasterData }) {

    roasterData = roasterData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    if (roasterFilterState.hideRoastersWithALimitedDeliveryArea) {
        roasterData = roasterData.filter(x => x.deliversNationwide === true);
    }

    if (roasterFilterState.foreignCoffee) {
        roasterData = roasterData.filter(x => x.foreignCoffee === true);
    }

    if (roasterFilterState.onlineShopping) {
        roasterData = roasterData.filter(x => x.onlineShopping === true);
    }

    if (roasterFilterState.state && roasterFilterState.state.value != "0") {
        roasterData = roasterData.filter(x => x.state === roasterFilterState.state.value);
    }

    if (roasterFilterState.roasterName) {
        roasterData = roasterData.filter(x => x.name.toLowerCase().includes(roasterFilterState.roasterName.toLowerCase()));
    }

    return (
        <ul className="roasterList">
            {roasterData.map((item, i) => (
                <li key={"roaster" + item.roasterID} className="roasterDetail"><RoasterDetail roasterInfo={item} /></li>
            ))
            }
        </ul>
    )
};