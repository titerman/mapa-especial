import dynamic from 'next/dynamic';
import HeadlessCheckbox from './HeadlessCheckbox';
import { Fieldset, Legend } from '@headlessui/react';
import { useForm, Controller } from "react-hook-form";

const Select = dynamic(() => import('react-select'), { ssr: false }); // disable SSR for react-select

import roasters from '@/data/roasters.json'


const createDropdownRoastersArray = function (originalArray) {
    let roasterOptionArray = []
    originalArray.map((item, i) => {
        let userNumber = item.ownShops.length + item.ownCafes.length + item.clientShops.length + item.clientCafes.length;
        roasterOptionArray.push({ value: item.roasterID, label: item.name, userNumber: userNumber });
    });

    roasterOptionArray = roasterOptionArray.sort(({ userNumber: a }, { userNumber: b }) => b - a);

    return roasterOptionArray;
}

export default function Sidebar({ filterStatus, setFilterStatus, filterWindowStatus, setFilterWindowStatus }) {
    const { control, watch, reset } = useForm({
        defaultValues: filterStatus,
    })

    watch((data) => {
        setFilterStatus(data);
    });

    const hideFilterWindow = function () {
        setFilterWindowStatus({
            filterWindowActive: false
        })
    }

    const resetFilter = function () {
        reset();
    }

    return (
        <>
            {filterWindowStatus.filterWindowActive &&
                <aside>
                    <button className="closeFilterView" onClick={hideFilterWindow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                    </button>
                    <div className="filterFormContainer">
                        <form>
                            <ul>
                                <li>
                                    <Fieldset>
                                        <Legend>Categorias</Legend>
                                        <ul>
                                            <HeadlessCheckbox value={"Cafeterias"} name={"display.cafes"} control={control} />
                                            <HeadlessCheckbox value={"Lojas"} name={"display.shops"} control={control} />
                                        </ul>
                                    </Fieldset>
                                </li>
                                <li>
                                    <Fieldset>
                                        <Legend>Características</Legend>
                                        <ul>
                                            <HeadlessCheckbox value={"Leites vegetais"} name={"properties.veganMilk"} control={control} />
                                            <HeadlessCheckbox value={"Pet friendly"} name={"properties.petFriendly"} control={control} />
                                            <HeadlessCheckbox value={"Eventos (cuppings, etc.)"} name={"properties.hostsEvents"} control={control} />
                                            <HeadlessCheckbox value={"Cafés gringos"} name={"properties.foreignCoffee"} control={control} />
                                        </ul>
                                    </Fieldset>
                                </li>
                                <li>
                                    <Fieldset>
                                        <Legend>Torrador</Legend>
                                        <Controller
                                            name="roasters"
                                            control={control}
                                            render={({ field }) => (
                                                <Select {...field} instanceId="" options={createDropdownRoastersArray(roasters.roasters)} isMulti={true} placeholder={"Torrador"} className='roasterSelector' control={control} />
                                            )} />
                                    </Fieldset>
                                </li>
                                <li>
                                    <Fieldset>
                                        <Legend>Métodos de preparo</Legend>
                                        <ul>
                                            <HeadlessCheckbox value={"Espresso"} name={"properties.brewingMethods.espresso"} control={control} />
                                            <HeadlessCheckbox value={"Batch brew"} name={"properties.brewingMethods.batchBrew"} control={control} />
                                            <HeadlessCheckbox value={"Hario v60 ou coadores similhantes"} name={"properties.brewingMethods.hario"} control={control} />
                                            <HeadlessCheckbox value={"Chemex"} name={"properties.brewingMethods.chemex"} control={control} />
                                            <HeadlessCheckbox value={"Aeropress"} name={"properties.brewingMethods.aeropress"} control={control} />
                                            <HeadlessCheckbox value={"Prensa francesa"} name={"properties.brewingMethods.frenchPress"} control={control} />
                                            <HeadlessCheckbox value={"Café oriental"} name={"properties.brewingMethods.oriental"} control={control} />
                                            <HeadlessCheckbox value={"Moka"} name={"properties.brewingMethods.moka"} control={control} />
                                        </ul>
                                    </Fieldset>
                                </li>
                                <li>
                                    <Fieldset>
                                        <Legend>Comida</Legend>
                                        <ul>
                                            <HeadlessCheckbox value={"Sobremesas"} name={"properties.food.desserts"} control={control} />
                                            <HeadlessCheckbox value={"Café da manhã"} name={"properties.food.breakfast"} control={control} />
                                            <HeadlessCheckbox value={"Lanches"} name={"properties.food.snacks"} control={control} />
                                            <HeadlessCheckbox value={"Pratos principais"} name={"properties.food.mainDishes"} control={control} />
                                            <HeadlessCheckbox value={"Opções veg"} name={"properties.food.vegFood"} control={control} />
                                        </ul>
                                    </Fieldset>
                                </li>
                                <li>
                                    <Fieldset>
                                        <Legend>Produtos para venda</Legend>
                                        <ul>
                                            <HeadlessCheckbox value={"Café em grãos"} name={"properties.shop.coffeeBeans"} control={control} />
                                            <HeadlessCheckbox value={"Equipamento do café"} name={"properties.shop.equipment"} control={control} />
                                            <HeadlessCheckbox value={"Produtos temáticos"} name={"properties.shop.merch"} control={control} />
                                        </ul>
                                    </Fieldset>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className='mobileButtons'>
                        <button onClick={resetFilter}>Limpar</button>
                        <button onClick={hideFilterWindow}>Filtrar</button>
                    </div>
                </aside>}
        </>

    )
}