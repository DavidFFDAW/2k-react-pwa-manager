import React, { useState } from 'react'
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import { GreyButton } from '~/components/Buttons/Buttons';
import './teamblock.css';

export default function TeamListComponent({ team }) {
    const [showMembers, setShowMembers] = useState(false);
    const handleClick = _ => {
        setShowMembers(pr => !pr);
    }

    return (
        <div className='w90 boxed teams-boxed'>
            <header className={`flex between al-center team-block-header ${showMembers ? 'active' : 'normal'}`}>
                <h3>{team.name}</h3>

                <GreyButton text={'Mostrar miembros'} onClick={handleClick} />
            </header>
            <NullableLoading condition={showMembers}>
                <section className='flex center team-members-block'>
                    <div className='grid team-members'>
                        {team.members.map((member, index) => {
                            return (<div key={index} className='flex column center al-center wrestler-team-member'>
                                <div className='w1 wrestler-card__image-card'>
                                    <img src={member.image_name} alt={member.name} width={512} height={512} />
                                </div>

                                <p>{member.name}</p>

                            </div>)
                        })}
                    </div>
                </section>

            </NullableLoading>


        </div>
    )
}
