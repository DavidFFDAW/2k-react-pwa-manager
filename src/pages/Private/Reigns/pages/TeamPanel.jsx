import React from 'react';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import CreateTeamManually from '../components/CreateTeamManually';
import { LengthLoading, NullableLoading } from '~/components/Loading/LoadingComponent';
import { ButtonSecondary } from '~/components/Buttons/Buttons';
import { ITEMS } from '../hooks/useCreateReign';

export default function TeamPanel({ createDatas, form, setFormState, getTeamID }) {
    const CustomSelectTeams = (
        <LengthLoading list={createDatas.teams}>
            <CustomSelect
                nameProp={'name'}
                imageProp={'image'}
                list={createDatas.teams}
                getIdCallback={id => getTeamID(id, ITEMS.TEAM)}
            />
        </LengthLoading>
    );

    return (
        <div className="reigns-teams-panel">
            <NullableLoading condition={!form.isCreateTagTeam} fallback={null}>
                {CustomSelectTeams}
            </NullableLoading>

            <div className={`flex start gap column ${form.isCreateTagTeam ? '' : 'down'}`}>
                <ButtonSecondary
                    text={form.isCreateTagTeam ? 'Volver al listado' : 'Crear equipo nuevo'}
                    onClick={_ => setFormState(p => ({ ...p, isCreateTagTeam: !p.isCreateTagTeam }))}
                />
            </div>

            <NullableLoading condition={form.isCreateTagTeam} fallback={null}>
                <div style={{ padding: '0 20px' }} className="w1 flex center column al-center gap-small">
                    <CreateTeamManually form={form} setFormState={setFormState} wrestlers={createDatas.wrestlers} />
                </div>
            </NullableLoading>
        </div>
    );
}
