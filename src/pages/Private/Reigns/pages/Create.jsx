import React from 'react';
import { Boxed } from '~/components/Box/Boxed';
import useCreateReign, { ITEMS } from '../hooks/useCreateReign';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import TeamPanel from './TeamPanel';
import { UpsertDate, UpsertToggle } from '~/components/Forms/FormInputs';
import { FlexCenter } from '~/components/Layouts/Flex';
import { LengthLoading, NullableLoading } from '~/components/Loading/LoadingComponent';
import { ButtonCTA } from '~/components/Buttons/Buttons';

export default function Create() {
    const { createDatas, form, setFormState, getItemID, submitForm } = useCreateReign();
    const isTagTeam = Boolean(createDatas.selectedChampionship.tag);

    const CustomSelectChampions =
        <LengthLoading list={createDatas.championships}>
            <CustomSelect
                zindex={12}
                nameProp={'name'}
                imageProp={'image'}
                list={createDatas.championships}
                getIdCallback={id => getItemID(id, ITEMS.CHAMPIONSHIP)}
            />
        </LengthLoading>


    const CustomSelectWrestlers =
        <LengthLoading list={createDatas.wrestlers}>
            <CustomSelect
                zindex={10}
                nameProp={'name'}
                imageProp={'image'}
                list={createDatas.wrestlers}
                getIdCallback={id => getItemID(id, ITEMS.WRESTLER)}
            />
        </LengthLoading>

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

                <NullableLoading condition={!isTagTeam}>
                    <Boxed title={'Luchador'}>
                        <FlexCenter justify={'center'} align={'start'} gap={'small'}>
                            {CustomSelectWrestlers}
                        </FlexCenter>
                    </Boxed>
                </NullableLoading>


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


                    <NullableLoading condition={!form.isCurrent}>
                        <UpsertDate
                            min={form.start}
                            max={form.today}
                            name={'end'}
                            label={'Fecha Fin'}
                            property={'end'}
                            formState={form}
                            setFormState={setFormState}
                        />
                    </NullableLoading>
                </Boxed>

                <NullableLoading condition={isTagTeam}>
                    <TeamPanel
                        createDatas={createDatas}
                        form={form}
                        setFormState={setFormState}
                        getTeamID={id => getItemID(id, ITEMS.TEAM)}
                    />
                </NullableLoading>


                <div className="w90 flex end al-center gap">
                    <ButtonCTA type={'submit'} disabled={createDatas.loading} text={'Crear'} />
                </div>
            </form>
        </>
    );
}
