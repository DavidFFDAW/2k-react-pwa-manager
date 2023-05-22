import React from 'react'
import LoadingBoxed from '~/components/Loading/LoadingBoxed';

export default function TeamsLoadingComponent() {
    const iterations = Array.from({ length: 5 });
    console.log(iterations);
    return (
        <>
            <div className="w1 flex between column al-center gap padded">
                {iterations.map((_, indx) => {
                    return <LoadingBoxed key={indx} />
                })}
            </div>

        </>
    )
}
