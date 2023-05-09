import React from 'react'
import useCreateReign from '../hooks/useCreateReign'
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import { Boxed } from '~/components/Box/Boxed';
import TeamPanel from './TeamPanel';

export default function Create() {
    const { createDatas, form, setFormState, getWrestlerID, getChampionshipID, submitForm } = useCreateReign();

    // if (createDatas.loading) return <Spinner />
    const CustomSelectChampions = createDatas.championships.length > 0 ? <CustomSelect
        nameProp={'name'}
        imageProp={'image'}
        list={createDatas.championships}
        getIdCallback={getChampionshipID}
    /> : <ComponentSpinner />

    // const wrestlerOrTeam = Boolean(createDatas.selectedChampionship.tag) ? createDatas.teams : createDatas.wrestlers;
    const isTagTeam = Boolean(createDatas.selectedChampionship.tag);

    const CustomSelectWrestlers = createDatas.wrestlers.length > 0 ? <CustomSelect
        nameProp={'name'}
        imageProp={'image'}
        list={createDatas.wrestlers}
        getIdCallback={getWrestlerID}
    /> : <ComponentSpinner />

    const CustomSelectTeams = createDatas.wrestlers.length > 0 ? <CustomSelect
        nameProp={'name'}
        imageProp={'image'}
        list={createDatas.teams}
        getIdCallback={getWrestlerID}
    /> : <ComponentSpinner />

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

                {isTagTeam ? <TeamPanel createDatas={createDatas} customSelectTeams={CustomSelectTeams} /> : null}

                <div className="w90 flex end al-center gap-small">
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
