import React from 'react';
import useTeamCreate from './hooks/useTeamCreate';
import { FlexCenter, FlexEnd } from '~/components/Layouts/Flex';
import { Boxed } from '~/components/Box/Boxed';
import UpsertInput from '~/components/Forms/FormInputs';
import { ButtonCTA } from '~/components/Buttons/Buttons';
import ScrollableArea from '~/components/Scrollable/ScrollableArea';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import CustomSelect from '~/components/CustomSelect/CustomSelect';

function MembersList({ property, form, setFormState }) {
    const removeTeamMember = id => {
        const members = form[property].filter(m => m.id !== id);
        const overall = Math.floor(members.reduce((acc, curr) => acc + curr.overall, 0) / members.length);

        setFormState(p => ({ ...p, members, overall }));
    };

    return (
        <>
            <NullableLoading condition={form[property].length > 0}>
                {form[property].map((member, index) => {
                    const img = member.image ? member.image : '/noimage.jpg';

                    return (
                        <div key={index} className="w1 scrollable-item flex between al-center gap">
                            <div className="flex start al-center gap">
                                <div className="backgroundimage" style={{ backgroundImage: `url(${img})` }}></div>
                                <p>{member.name}</p>
                            </div>
                            <DangerButton text={<>&times;</>} onClick={() => removeTeamMember(member.id)} />
                        </div>
                    );
                })}
            </NullableLoading>
        </>
    );
}

export default function Creation() {
    const { teamDatas, getMemberId, setTeamData, submitForm } = useTeamCreate();

    return (
        <>
            <form
                method="POST"
                className="flex center al-center column gap wrestler-upsert-form space-down"
                onSubmit={submitForm}
            >
                <Boxed title={'Datos del equipo'} w={100}>
                    <FlexCenter justify={'center'} align={'start'} gap={'small'}>
                        <UpsertInput
                            required={true}
                            max={150}
                            label={'Nombre'}
                            property={'name'}
                            formState={teamDatas}
                            setFormState={setTeamData}
                        />
                        <UpsertInput
                            type={'number'}
                            max={3}
                            required={true}
                            label={'Media'}
                            property={'overall'}
                            formState={teamDatas}
                            setFormState={setTeamData}
                        />
                    </FlexCenter>
                </Boxed>

                <Boxed w={100}>
                    <div className="space-down">
                        <ScrollableArea height={200} title={'Miembros de equipo'}>
                            <MembersList property={'members'} form={teamDatas} setFormState={setTeamData} />
                        </ScrollableArea>
                    </div>

                    <CustomSelect
                        resultListHeight={310}
                        list={teamDatas.wrestlers}
                        nameProp={'name'}
                        imageProp={'image'}
                        getIdCallback={getMemberId}
                        deleteText={true}
                    />
                </Boxed>

                <FlexEnd>
                    <ButtonCTA type={'submit'} text={'Guardar'} />
                </FlexEnd>
            </form>
        </>
    );
}
