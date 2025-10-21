'use client'

import dynamic from 'next/dynamic';
import HeadlessCheckbox from './HeadlessCheckbox';
import { Fieldset, Legend } from '@headlessui/react';
import { useForm, Controller } from "react-hook-form";

const Select = dynamic(() => import('react-select'), { ssr: false }); // disable SSR for react-select

export default function RoasterFilter({ roasterFilterState, setRoasterFilterState, roasterStates }) {

    const { control, watch } = useForm({
        defaultValues: roasterFilterState,
    })

    watch((data) => {
        setRoasterFilterState(data);
    });

    return (
        <>
            <div className="roasterFilterContainer">
                <form>
                    <ul>
                        <li>
                            <Fieldset>
                                <ul>
                                    <li>
                                        <Controller
                                            name="roasterName"
                                            control={control}
                                            render={({ field }) => (
                                                <input className="searchField" type="text" {...field} placeholder={"Filtrar por nome"} control={control} />
                                            )} />
                                    </li>
                                    <HeadlessCheckbox value={"Ocultar os torradores sem vendas online"} name={"onlineShopping"} control={control} />
                                    <HeadlessCheckbox value={"Cafés estrangeiros"} name={"foreignCoffee"} control={control} />
                                    <HeadlessCheckbox liClassName="finalRoasterFilterCheckbox" value={"Ocultar os torradores sem entrega nacional"} name={"hideRoastersWithALimitedDeliveryArea"} control={control} />
                                    <li>
                                        <Controller
                                            name="state"
                                            control={control}
                                            render={({ field }) => (
                                                <Select {...field} options={roasterStates} isMulti={false} className='stateSelector' control={control} defaultValue={{ value: "0", label: "Todos os Estados" }} />
                                            )} />
                                    </li>
                                </ul>

                            </Fieldset>
                        </li>
                    </ul>
                </form>
            </div>
        </>

    )
}