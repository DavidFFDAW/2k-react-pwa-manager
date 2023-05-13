import React from 'react';
import { Boxed } from '~/components/Box/Boxed';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import CreateTeamManually from '../components/CreateTeamManually';
import { UpsertToggle } from '~/components/Forms/FormInputs';

export default function TeamPanel({ createDatas, form, setFormState, getTeamID }) {
    const CustomSelectTeams =
        createDatas.teams.length > 0 ? (
            <CustomSelect nameProp={'name'} imageProp={'image'} list={createDatas.teams} getIdCallback={getTeamID} />
        ) : (
            <ComponentSpinner />
        );

    return (
        <>
            <Boxed title={form.isCreateTagTeam ? 'Nuevo equipo' : 'Equipos'}>
                {!form.isCreateTagTeam ? CustomSelectTeams : null}

                <div className="flex start gap">
                    <p>No encuentro el equipo que quiero</p>
                    <div className="">
                        <UpsertToggle
                            label={'Crear equipo nuevo'}
                            toggleCallback={_ => setFormState(p => ({ ...p, isCreateTagTeam: !p.isCreateTagTeam }))}
                        />
                    </div>
                </div>

                {form.isCreateTagTeam ? (
                    <div style={{ padding: 20 }} className="w1 flex center column al-center gap-small">
                        <CreateTeamManually form={form} setFormState={setFormState} wrestlers={createDatas.wrestlers} />
                    </div>
                ) : null}
            </Boxed>
        </>
    );
}
