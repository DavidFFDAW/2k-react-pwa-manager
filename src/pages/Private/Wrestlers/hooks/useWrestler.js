import React from 'react';
import { Wrestler } from '~/models/wrestler.model';

export default function useWrestler(endpoint) {
    const [wrestlerList, setWrestlerList] = React.useState({
        list: [],
        original: [],
        loading: true,
        hasFilters: false,
        pagination: true,
        wrestlersByPage: 10,
    });
    const updater = data => setWrestlerList(p => ({ ...p, list: data, original: data, loading: false }));
    const wrestlerModel = Wrestler(updater);

    React.useEffect(() => {
        const { api } = wrestlerModel.getActiveWrestlers();

        api.then(wrestlers => {
            wrestlerModel.saveWrestlersCache(wrestlers.original);
            setWrestlerList(prev => ({
                ...prev,
                list: wrestlers.active,
                original: wrestlers.original,
                loading: false,
            }));
        });
    }, [endpoint]);

    return { wrestlerList, setWrestlerList, hire: wrestlerModel.hire, release: wrestlerModel.release };
}
