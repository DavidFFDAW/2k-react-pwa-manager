import React from 'react';
import { Boxed } from '~/components/Box/Boxed';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import CreateTeamManually from '../components/CreateTeamManually';
import { UpsertToggle } from '~/components/Forms/FormInputs';
import { LengthLoading, NullableLoading } from '~/components/Loading/LoadingComponent';

export default function TeamPanel({ createDatas, form, setFormState, getTeamID }) {
    const CustomSelectTeams =
        <LengthLoading list={createDatas.teams}>
            <CustomSelect nameProp={'name'} imageProp={'image'} list={createDatas.teams} getIdCallback={getTeamID} />
        </LengthLoading>

    return (
        <>
            <Boxed title={form.isCreateTagTeam ? 'Nuevo equipo' : 'Equipos'}>
                <NullableLoading condition={!form.isCreateTagTeam} fallback={null}>
                    {CustomSelectTeams}
                </NullableLoading>

                <div className="flex start gap">
                    <p>No encuentro el equipo que quiero</p>
                    <div className="">
                        <UpsertToggle
                            label={'Crear equipo nuevo'}
                            toggleCallback={_ => setFormState(p => ({ ...p, isCreateTagTeam: !p.isCreateTagTeam }))}
                        />
                    </div>
                </div>

                <NullableLoading condition={form.isCreateTagTeam} fallback={null}>
                    <div style={{ padding: 20 }} className="w1 flex center column al-center gap-small">
                        <CreateTeamManually form={form} setFormState={setFormState} wrestlers={createDatas.wrestlers} />
                    </div>
                </NullableLoading>
            </Boxed>
        </>
    );
}
