import React from 'react';
import Subchampions from './Subchampions';

export default function Champion({ champion }) {
    const championship = champion[0].championship;
    const [showChampions, setShowChampions] = React.useState(false);

    return (
        <div className="w90 champion" onClick={_ => setShowChampions(previous => !previous)}>
            <div className="w1 flex between al-center boxed">
                <div className="wrestler-card__image flex start al-center column">
                    <img src={championship.image} alt={championship.name} />
                </div>
                <h4>{championship.name}</h4>
            </div>

            {Boolean(showChampions) && (
                <div className="w1 champions-list" style={{ padding: '20px 0' }}>
                    <Subchampions subchampions={champion} />
                </div>
            )}
        </div>
    );
}
