import React from 'react';
import { DangerButton } from '~/components/Buttons/Buttons';
import CustomSelect from '~/components/CustomSelect/CustomSelect';
import UpsertInput from '~/components/Forms/FormInputs';
import { ConditionalLoading, NullableLoading } from '~/components/Loading/LoadingComponent';
import ScrollableArea from '~/components/Scrollable/ScrollableArea';

function MembersList({ form, setFormState }) {
    const removeTeamMember = id => {
        const members = form.createTeam.members.filter(m => m.id !== id);
        const overall = Math.floor(members.reduce((acc, curr) => acc + curr.overall, 0) / members.length);

        setFormState(p => ({ ...p, createTeam: { ...p.createTeam, members, overall } }));
    };

    return (
        <>
            <NullableLoading condition={form.createTeam.members.length > 0}>
                {form.createTeam.members.map((member, index) => {
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

export default function CreateTeamManually({ form, setFormState, wrestlers }) {
    const innerList = wrestlers.filter(w => !form.createTeam.members.includes(w));

    const handleIdCallback = id => {
        setFormState(p => ({ ...p, createTeam: { ...p.createTeam, tmp_selected: id, selected: false } }));
    };

    const handleAddition = () => {
        const wrestler = wrestlers.find(w => w.id === form.createTeam.tmp_selected);

        if (wrestler) {
            const overall = Math.floor(
                form.createTeam.members.reduce((acc, curr) => acc + curr.overall, 0) / form.createTeam.members.length,
            );
            setFormState(p => ({
                ...p,
                createTeam: { ...p.createTeam, members: [...p.createTeam.members, wrestler], overall, selected: true },
            }));
        }
    };

    return (
        <>
            <div className="w1 flex between al-center gap reigns-team-create-row spaced">
                <UpsertInput
                    type={'text'}
                    label={'Nombre de equipo'}
                    name={'name'}
                    formState={form.createTeam}
                    property={'name'}
                    onChangeCallback={ev =>
                        setFormState(p => ({ ...p, createTeam: { ...p.createTeam, name: ev.target.value } }))
                    }
                    required={true}
                />
                {/* <UpsertInput
                    type={'number'}
                    label={'Media de equipo'}
                    name={'number'}
                    property={'overall'}
                    formState={form.createTeam}
                    onChangeCallback={ev =>
                        setFormState(p => ({ ...p, createTeam: { ...p.createTeam, overall: ev.target.value } }))
                    }
                    required={true}
                /> */}
            </div>

            <div className="w1 flex between al-center column gap-smaller team-members-list-container">
                <ScrollableArea height={200} title={'Miembros de equipo'}>
                    <MembersList form={form} setFormState={setFormState} />
                </ScrollableArea>
            </div>

            <ConditionalLoading condition={form.createTeam.members.length < 5} fallback={
                <div className="w1 flex center al-center">
                    <p>Los equipos no deben tener más de 5 miembros</p>
                </div>
            }>
                <div className="w1 flex center al-center column gap">
                    <CustomSelect
                        nameProp={'name'}
                        imageProp={'image'}
                        list={innerList}
                        getIdCallback={handleIdCallback}
                        deleteText={Boolean(form.createTeam.selected)}
                    />
                    <button className="" type="button" role="button" onClick={handleAddition}>
                        Agregar
                    </button>
                </div>
            </ConditionalLoading>
        </>
    );
}
