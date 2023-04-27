import React from 'react'
import UpsertInput from '~/components/Forms/UpsertInput';
import Spinner from '~/components/Spinner/Spinner';
import WrestlerCustomSelect from '~/components/Wrestler/CustomSelect/WrestlerCustomSelect';
import useGlobalWrestlers from '~/hooks/useGlobalWrestlers'

export default function Upsert({ type }) {
    const { wrestlers } = useGlobalWrestlers('active');

    return (
        <form action="POST" className="flex center al-center column gap wrestler-upsert-form" >
            <div className="w90 boxed">
                <h2 className="space-down">Autor</h2>
                <div className="w1 flex column al-start gap-small">
                    {wrestlers.length > 0 ? (
                        <WrestlerCustomSelect
                            list={wrestlers}
                            name_prop={'name'}
                            image_prop={'image'}
                        />
                    ) : <Spinner />}
                </div>
            </div>

            <div className="w90 boxed">
                <h2 className="space-down">Datos del Tweet</h2>
                <div className="w1 flex column al-start gap-small">
                    <UpsertInput type="text" label="Nombre" property="name" formState={{ a: '' }} setFormState={_ => console.log('hil')} />
                </div>
            </div>
        </form>
    )
}
