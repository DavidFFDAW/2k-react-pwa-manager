import React from 'react'
import useTeams from '../hooks/useTeams'
import Spinner from '~/components/Spinner/Spinner';
import ImagePreview from '../../Wrestlers/components/ImagePreview';

export default function List() {
    const { teams } = useTeams();
    console.log(teams);

    if (teams.length <= 0) return <Spinner />

    return (
        <div className="w1 flex between column al-center gap padded">

            {teams.map((team, index) => {
                return (
                    <div key={index} className='w90 boxed'>
                        <h1 style={{ fontSize: 24 }}>{team.name}</h1>
                        <ul style={{ listStyle: 'none' }}>
                            {team.members.map((member, index) => {
                                return (
                                    <li key={index} className='flex start al-center gap' style={{ margin: '20px 0' }}>
                                        {/* <ImagePreview image={member.image_name} name={member.name} maxW={30} maxH={10} px /> */}
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundImage: `url(${member.image_name})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: '50%',
                                            marginRight: '10px'

                                        }}></div>
                                        {member.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    )
}
