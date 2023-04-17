import React from 'react'
import UpsertInput, { UpsertSelect } from './UpsertInput'

export default function UpsertDatas({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput type="text" label="Nombre" property="name" formState={formState} setFormState={setFormState} />
            <UpsertInput type="text" label="Alias" property="alias" formState={formState} setFormState={setFormState} />
            <UpsertInput type="text" label="Finisher" property="finisher" formState={formState} setFormState={setFormState} />
            <UpsertInput type="number" label="Media" property="overall" formState={formState} setFormState={setFormState} />
            <UpsertSelect label="Sexo" property="sex" formState={formState} setFormState={setFormState}>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
            </UpsertSelect>
        </div>

    )
}
