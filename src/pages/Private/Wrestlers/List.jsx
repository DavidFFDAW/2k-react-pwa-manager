import React from 'react';
import useWrestler from './hooks/useWrestler';

export default function List() {
    const { wrestlerList } = useWrestler();

    return (
        <div>
            <h1>List</h1>

            {!wrestlerList.loading ? (
                <ul>
                    {wrestlerList.list.slice(0, 10).map(wrestler => (
                        <li key={wrestler.id}>{wrestler.name}</li>
                    ))}
                </ul>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}
