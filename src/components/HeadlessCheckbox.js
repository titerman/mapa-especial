import { Checkbox, Field, Label } from '@headlessui/react'
import { Controller } from 'react-hook-form'

export default function HeadlessCheckbox({ value, name, checked, control }) {
    return (
        <li>
            <Field className="filterCheckBoxContainer">
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) =>
                        <Checkbox  {...field}
                            className="filterCheckBox"
                            name={name}
                            id={name}
                            defaultChecked={field .value}
                            checked={field .value}
                            itemID={name}
                        >
                            <svg className="checkboxImage" viewBox="0 0 14 14" fill="none">
                                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Checkbox>}
                />
                <Label htmlFor={name}>{value}</Label>
            </Field>
        </li>
    )
}
