import React from 'react';
import useTeams from '../hooks/useTeams';
import TeamsLoadingComponent from './components/TeamsLoading';
import CreateButton from '~/components/Buttons/CreateButton';
import TeamListComponent from './components/TeamListComponent';

export default function List() {
    const { teams } = useTeams();
    console.log(teams);

    if (teams.loading) return <TeamsLoadingComponent />;

    return (
        <div className="w1 flex between column al-center gap padded">
            <CreateButton endpoint={'teams/creation'} />

            {teams.list.map((team, index) => {
                // Grid Rows Template Part
                //    *   *   *
                //      *   *

                return <TeamListComponent key={index} team={team} />;
                return (
                    <div key={index} className="w90 boxed">
                        <h1 style={{ fontSize: 24 }}>
                            {team.name} ({team.average})
                        </h1>
                        <ul style={{ listStyle: 'none' }}>
                            {team.members.map((member, index) => {
                                return (
                                    <li key={index} className="flex start al-center gap" style={{ margin: '20px 0' }}>
                                        {/* <ImagePreview image={member.image_name} name={member.name} maxW={30} maxH={10} px /> */}
                                        <div className="wrestler-card__image flex start al-center column">
                                            <img src={member.image_name} alt={member.name} width={512} height={512} />
                                        </div>
                                        <h3>{member.name}</h3>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
