import React from 'react'

export default function Subchampions({ subchampions }) {

    return (
        <ul className='w1 flex center column al-center gap-small' style={{ listStyle: 'none' }}>
            {subchampions.map((champ) => {
                const wrestler = champ.wrestler;
                const wrestlerOrTeamName = champ.championship.tag ? wrestler.team.name : wrestler.name;
                // const key = `${champ.title_reign_id}-${wrestler.id}-${champ.championship.id}`;

                return (
                    <li key={champ.title_reign_id} className='w1 bounce'>
                        <div className="w1 wrestler-center flex center al-center">
                            <div className="w1 flex start al-start gap boxed">
                                {champ.championship.tag && <div className="wrestler-card__image flex start al-center column">
                                    <img style={{ maxWidth: '65%' }} src={wrestler.image} alt={wrestler.name} />
                                </div>}

                                <div className="w1 wrestler-card__info">
                                    <h3 className="wrestler-card__name">{wrestlerOrTeamName}</h3>
                                    <p>{champ.days} días</p>
                                    {Boolean(champ.current) && <p>Actual</p>}
                                </div>

                            </div>
                        </div>
                    </li>
                )
            })}
        </ul >

    )
}
