import React from 'react'
import useChampions from '../hooks/useChampions';
import Champion from '../components/Champion';
import Spinner from '~/components/Spinner/Spinner';

export default function ChampionsList() {
    const { champions } = useChampions();

    if (!champions) return <Spinner />

    return (
        <>
            <div className='w1 flex center al-center column gap-small space-down'>
                {Object.entries(champions).map(([key, champion]) => {
                    return <Champion key={key} champion={champion} />
                })}
            </div>
        </>
    )
}
