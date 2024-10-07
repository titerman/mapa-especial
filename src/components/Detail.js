import roasters from '@/data/roasters.json';
const roasterList = roasters.roasters;
import defaultDetailState from '@/data/defaultDetailState.json'
import { returnTruthyEntries } from '@/scripts/returnTruthyEntries';
import dictionary from '@/data/dictionary'
import InlineDetailProperty from './InlineDetailProperty';
import YesNoMarker from './YesNoMarker';

const findRoasterById = function (idToFind) {
    return roasterList.find(({ roasterID }) => roasterID === idToFind).name;
}

export default function Detail({ detailInfo, activityStatus, detailActivator, stateChanger }) {
    const hideDetailWindow = function () {
        detailActivator({ "isActive": false });
        stateChanger(defaultDetailState);
    }
    return (
        <div id="detailWindow" className={`banner ${activityStatus.isActive ? "active" : "hidden"}`}>
            <div className="detailContainer">
                <div className="fixTextDirection">
                    <div className="headingLinks">
                        <h2 className='detailTitle'>{detailInfo.properties.name}</h2>
                        <div className="headingLinksLinks">
                            {detailInfo.properties.instagramHandle && <a href={"https://instagram.com/" + detailInfo.properties.instagramHandle} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path></svg></a>}
                            {detailInfo.properties.websiteURL && <a href={detailInfo.properties.websiteURL} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"></path></svg></a>}
                        </div>
                    </div>
                    {detailInfo.properties.googleMapsEmbedURL &&
                        <div className="iFrameTrap">
                            <iframe src={detailInfo.properties.googleMapsEmbedURL} width="500px" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    }
                    <ul>
                        {detailInfo.properties.roasters.length > 0 &&
                            <li className='infoSection' key="roasters">
                                <div className="infoSectionTitle">Torradores:</div>
                                <ul>
                                    {detailInfo.properties.roasters.map((item, i) => (
                                        <InlineDetailProperty key={i} translation={findRoasterById(detailInfo.properties.roasters[i])} iterator={i} orgArray={detailInfo.properties.roasters} />
                                    ))
                                    }
                                </ul>
                            </li>
                        }

                        {detailInfo.properties.espressoPrice > 0 && <li className='infoSection' key="infoSectionKey"><div className="infoSectionTitle">Preço do espresso:</div> <span className="detailValue">R${detailInfo.properties.espressoPrice}</span></li>}
                        {detailInfo.properties.brewingMethods &&
                            Object.values(detailInfo.properties.brewingMethods).some(val => val === true) &&
                            <li className='infoSection' key="brewingMethods">
                                <div className="infoSectionTitle" key="infoSectionTitle" >Metodos de preparo:</div>
                                <ul>
                                    {returnTruthyEntries(detailInfo.properties.brewingMethods).map((item, iterator, orgArray) => (
                                        <InlineDetailProperty key={Math.random()} translation={dictionary[item.item]} iterator={iterator} orgArray={orgArray} />
                                    ))}
                                </ul>
                            </li>
                        }
                        {detailInfo.properties.food && Object.values(detailInfo.properties.food).some(val => val === true) &&
                            <li className='infoSection' key="food"><div className="infoSectionTitle">Comida:</div>
                                <ul>
                                    {returnTruthyEntries(detailInfo.properties.food).map((item, iterator, orgArray) => (
                                        <InlineDetailProperty key={Math.random()} translation={dictionary[item.item]} iterator={iterator} orgArray={orgArray} />
                                    ))}
                                </ul>
                            </li>
                        }
                        {returnTruthyEntries(detailInfo.properties.shop).length > 0 &&
                            <li className='infoSection' key="productsForSale"><div className="infoSectionTitle" lang="pt">Produtos para venda:</div>
                                <ul>
                                    {returnTruthyEntries(detailInfo.properties.shop).map((item, iterator, orgArray) => (
                                        <InlineDetailProperty key={Math.random()} translation={dictionary[item.item]} iterator={iterator} orgArray={orgArray} />
                                    ))}
                                </ul>
                            </li>
                        }
                        <li className='infoSection' key="otherOptions">
                            <ul>
                                <li className="fullLineItem" key="veganMilk"><YesNoMarker exp={detailInfo.properties.veganMilk} />Leites vegetais</li>
                                <li className="fullLineItem" key="petFriendly"><YesNoMarker exp={detailInfo.properties.petFriendly} />Pet friendly</li>
                                <li className="fullLineItem" key="hostsEvents"><YesNoMarker exp={detailInfo.properties.hostsEvents} />Eventos</li>
                                <li className="fullLineItem" key="foreignCoffee"><YesNoMarker exp={detailInfo.properties.foreignCoffee} />Cafes gringos</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
            <button className="closeDetailView" onClick={hideDetailWindow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
            </button>
        </div >
    )
};