import React from 'react'
import { Boxed } from '~/components/Box/Boxed'

export default function TeamPanel({ createDatas, customSelectTeams }) {

    return (
        <>
            <Boxed title={'Equipos'}>
                {customSelectTeams}
            </Boxed>
        </>
    )
}
