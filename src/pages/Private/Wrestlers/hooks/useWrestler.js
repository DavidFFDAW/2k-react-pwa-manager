import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { AppConfig } from '~/AppConfig';
import http from '~/services/http.service';

export default function useWrestler(endpoint) {
    const cachedWrestlers = localStorage.getItem('cached__wrestlers');
    // const baseArrayWrestlers = cachedWrestlers ? JSON.parse(cachedWrestlers) : [];
    const [wrestlerList, setWrestlerList] = React.useState({
        list: [],
        original: [],
        loading: true,
    });

    const getWrestlers = () => {
        return http.get(AppConfig.API_BASE_URL + `wrestlers/${endpoint}`).then(response => {
            if (!response.ok) {
                return enqueueSnackbar(response.content.message, { variant: 'error' });
            }
            return response.content;
        });
    };

    React.useEffect(() => {
        getWrestlers().then(wrestlers => {
            setWrestlerList({ list: wrestlers, original: wrestlers, loading: false });
        });

        if (!cachedWrestlers) {
            localStorage.setItem('cached__wrestlers', JSON.stringify(wrestlerList.list));
        }
    }, [endpoint]);

    return { wrestlerList, setWrestlerList };
}
