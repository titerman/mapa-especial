import YesNoMarker from './YesNoMarker';

export default function RoasterDetail({ roasterInfo }) {
    let shopsOrCafes = [];
    if (roasterInfo.ownShops.length > 0 || roasterInfo.ownCafes.length > 0 || roasterInfo.clientShops.length > 0 || roasterInfo.clientCafes.length > 0) {
        shopsOrCafes = [roasterInfo.ownShops, roasterInfo.ownCafes, roasterInfo.clientShops, roasterInfo.clientCafes].flat(2);
    }
    let roasterMapURL = "/?roasterID=" + roasterInfo.roasterID;
    const yesOnlineButLimitedDeliveryArea = function () {
        if (roasterInfo.deliversNationwide === false && roasterInfo.onlineShopping === true) {
            return true;
        }
    }
    return (
        <>
            <div className="headingLinks">
                <h2 key={"roaster" + roasterInfo.roasterID + "name"} className="roasterNameTitle">{roasterInfo.name}</h2>
                <div className="headingLinksLinks">
                    {roasterInfo.instagramHandle &&
                        <a href={"https://instagram.com/" + roasterInfo.instagramHandle} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path></svg></a>}
                    {roasterInfo.websiteURL &&
                        <a href={roasterInfo.websiteURL} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"></path></svg></a>}
                </div>
            </div>
            <ul className='roasterDetailList' key={roasterInfo.roasterID + "innerUL"}>

                <li className='roasterLocation' key={"roaster" + roasterInfo.roasterID + "place"}>
                    <svg className='svgMarker' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>{roasterInfo.city}/{roasterInfo.state}</li>
                {roasterInfo.foreignCoffee &&
                    <li key={"roaster" + roasterInfo.roasterID + "gringas"}><YesNoMarker exp="true" />Cafés de exterior </li>}
                {shopsOrCafes.length > 0 && <li key={"roaster" + roasterInfo.roasterID + "brickMortar"} className="linkToMap"><svg className='svgMarker' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg><a href={roasterMapURL}>{shopsOrCafes.length} establecimento(s) no mapa</a></li>}


                {roasterInfo.onlineShopping === false &&
                    <li key={"roaster" + roasterInfo.roasterID + "deliveryInfo"} className='deliveryWarningBlock'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff0000ff" viewBox="0 0 256 256"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>
                        Vendas somente na loja física
                    </li>}

                {yesOnlineButLimitedDeliveryArea() &&
                    <li key={"roaster" + roasterInfo.roasterID + "deliveryInfo"} className='deliveryWarningBlock'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff0000ff" viewBox="0 0 256 256"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>
                        Entrega somente dentro de São Paulo
                    </li>}
            </ul></>
    )
}