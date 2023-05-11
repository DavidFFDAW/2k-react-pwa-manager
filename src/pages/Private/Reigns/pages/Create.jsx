import React from 'react'
import useCreateReign, { ITEMS } from '../hooks/useCreateReign'
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import { Boxed } from '~/components/Box/Boxed';
import TeamPanel from './TeamPanel';
import UpsertInput, { UpsertToggle } from '~/components/Forms/FormInputs';

export default function Create() {
    const { createDatas, form, setFormState, getItemID, submitForm } = useCreateReign();

    const CustomSelectChampions = createDatas.championships.length > 0 ? <CustomSelect
        nameProp={'name'}
        imageProp={'image'}
        list={createDatas.championships}
        getIdCallback={id => getItemID(id, ITEMS.CHAMPIONSHIP)}
    /> : <ComponentSpinner />

    const isTagTeam = Boolean(createDatas.selectedChampionship.tag);

    const CustomSelectWrestlers = createDatas.wrestlers.length > 0 ? <CustomSelect
        nameProp={'name'}
        imageProp={'image'}
        list={createDatas.wrestlers}
        getIdCallback={id => getItemID(id, ITEMS.WRESTLER)}
    /> : <ComponentSpinner />

    console.log({
        createDatas,
        form,
    });

    return (
        <>
            <form
                method="POST"
                className="flex center al-center column gap wrestler-upsert-form"
                onSubmit={submitForm}
            >
                <Boxed title={'Título'}>
                    <div className="w1 flex column al-start gap-small">
                        {CustomSelectChampions}
                    </div>
                </Boxed>

                {!isTagTeam ? <Boxed title={'Luchador'}>
                    <div className="w1 flex column al-start gap-small">
                        {CustomSelectWrestlers}
                    </div>
                </Boxed> : null}

                {isTagTeam ? <TeamPanel
                    createDatas={createDatas}
                    form={form}
                    setFormState={setFormState}
                    getTeamID={id => getItemID(id, ITEMS.TEAM)}
                /> : null}

                <Boxed title={'Datos del reinado'}>
                    <div className="w1 flex column al-start gap">
                        <div>
                            <UpsertToggle toggleCallback={_ => setFormState(p => ({ ...p, isCurrent: !p.isCurrent }))} label={'Actual'} />
                        </div>

                        <UpsertInput
                            type={'date'}
                            name={'start'}
                            label={'Fecha Inicio'}
                            property={'start'}
                            formState={form}
                            setFormState={setFormState}
                        />

                        {form.isCurrent ? null : <UpsertInput
                            type={'date'}
                            name={'end'}
                            label={'Fecha Fin'}
                            property={'end'}
                            formState={form}
                            setFormState={setFormState}
                        />}
                    </div>
                </Boxed>


                <div className="w90 flex end al-center gap">
                    <button
                        type="submit"
                        className="cta"
                        disabled={createDatas.loading}
                    >
                        Crear
                    </button>
                </div>
            </form>

        </>
    )
}
