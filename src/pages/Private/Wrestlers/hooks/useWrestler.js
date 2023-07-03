import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { AppConfig } from '~/AppConfig';
import { database } from '~/database';
import { Wrestler } from '~/models/wrestler.model';
import http from '~/services/http.service';

export default function useWrestler(endpoint) {
    const cached = database.wrestlers.toArray();
    const [wrestlerList, setWrestlerList] = React.useState({
        list: [],
        original: [],
        loading: true,
        hasFilters: false,
        pagination: true,
        wrestlersByPage: 10,
    });

    const getWrestlers = () => {
        // console.log(Wrestler(setWrestlerList).getWrestlers());

        return http.get(AppConfig.API_BASE_URL + 'wrestlers/all').then(response => {
            if (!response.ok) {
                return enqueueSnackbar(response.content.message, { variant: 'error' });
            }
            return response.content;
        });
    };

    React.useEffect(() => {
        cached.then(cache => {
            const activeOnes = cache.filter(item => item.status === 'active');
            setWrestlerList(prev => ({ ...prev, list: activeOnes, original: cache, loading: false }));
        });

        getWrestlers().then(wrestlers => {
            const activeOnes = wrestlers.filter(item => item.status === 'active');
            database.wrestlers.bulkPut(wrestlers);
            setWrestlerList(prev => ({ ...prev, list: activeOnes, original: wrestlers, loading: false }));
        });
    }, [endpoint]);

    const setWrestlerPaginatedList = newObject => {
        setWrestlerList(prev => ({
            ...prev,
            ...newObject,
        }));
    };

    return { wrestlerList, setWrestlerList };
}
