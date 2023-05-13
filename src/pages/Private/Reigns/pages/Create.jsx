import React from 'react';
import useCreateReign, { ITEMS } from '../hooks/useCreateReign';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import { Boxed } from '~/components/Box/Boxed';
import TeamPanel from './TeamPanel';
import UpsertInput, { UpsertDate, UpsertToggle } from '~/components/Forms/FormInputs';
import { FlexCenter } from '~/components/Layouts/Flex';

export default function Create() {
    const { createDatas, form, setFormState, getItemID, submitForm } = useCreateReign();

    const CustomSelectChampions =
        createDatas.championships.length > 0 ? (
            <CustomSelect
                nameProp={'name'}
                imageProp={'image'}
                list={createDatas.championships}
                getIdCallback={id => getItemID(id, ITEMS.CHAMPIONSHIP)}
            />
        ) : (
            <ComponentSpinner />
        );

    const isTagTeam = Boolean(createDatas.selectedChampionship.tag);

    const CustomSelectWrestlers =
        createDatas.wrestlers.length > 0 ? (
            <CustomSelect
                nameProp={'name'}
                imageProp={'image'}
                list={createDatas.wrestlers}
                getIdCallback={id => getItemID(id, ITEMS.WRESTLER)}
            />
        ) : (
            <ComponentSpinner />
        );

    console.log({
        createDatas,
        form,
        isCurrent: form.isCurrent,
    });

    return (
        <>
            <form
                method="POST"
                className="flex center al-center column gap wrestler-upsert-form space-down"
                onSubmit={submitForm}
            >
                <Boxed title={'Título'}>
                    <FlexCenter justify={'center'} align={'start'} gap={'small'}>
                        {CustomSelectChampions}
                    </FlexCenter>
                </Boxed>

                {!isTagTeam ? (
                    <Boxed title={'Luchador'}>
                        <FlexCenter justify={'center'} align={'start'} gap={'small'}>
                            {CustomSelectWrestlers}
                        </FlexCenter>
                    </Boxed>
                ) : null}

                {isTagTeam ? (
                    <TeamPanel
                        createDatas={createDatas}
                        form={form}
                        setFormState={setFormState}
                        getTeamID={id => getItemID(id, ITEMS.TEAM)}
                    />
                ) : null}

                <Boxed title={'Datos del reinado'}>
                    <FlexCenter justify={'center'} align={'start'} direction={'row'} className={'spaced'}>
                        <div>
                            <UpsertToggle
                                toggleCallback={_ => setFormState(p => ({ ...p, isCurrent: !p.isCurrent }))}
                                label={'Anterior'}
                            />
                        </div>

                        <UpsertDate
                            max={form.today}
                            name={'start'}
                            label={'Fecha Inicio'}
                            property={'start'}
                            formState={form}
                            setFormState={setFormState}
                        />
                    </FlexCenter>
                    {form.isCurrent ? null : (
                        <UpsertDate
                            min={form.start}
                            max={form.today}
                            name={'end'}
                            label={'Fecha Fin'}
                            property={'end'}
                            formState={form}
                            setFormState={setFormState}
                        />
                    )}
                </Boxed>

                <div className="w90 flex end al-center gap">
                    <button type="submit" className="cta" disabled={createDatas.loading}>
                        Crear
                    </button>
                </div>
            </form>
        </>
    );
}
