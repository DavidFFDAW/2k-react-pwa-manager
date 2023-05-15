import React from 'react'
import useChampions from '../hooks/useChampions';
import Champion from '../components/Champion';
import Spinner from '~/components/Spinner/Spinner';
import CreateButton from '~/components/Buttons/CreateButton';
import { LengthLoading } from '~/components/Loading/LoadingComponent';

export default function ChampionsList() {
    const { champions } = useChampions();

    return (
        <>
            <div className='w1 flex center al-center column gap-small space-down'>
                <LengthLoading list={Object.entries(champions)}>
                    {Object.entries(champions).map(([key, champion]) => {
                        return <Champion key={key} champion={champion} />
                    })}
                </LengthLoading>
                <CreateButton endpoint={'champions/create/team'} />
            </div>
        </>
    )
}
