import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { AppConfig } from '~/AppConfig';
import http from '~/services/http.service';

export default function useWrestler() {
    const cachedWrestlers = localStorage.getItem('cached__wrestlers');
    const baseArrayWrestlers = cachedWrestlers ? JSON.parse(cachedWrestlers) : [];
    const [wrestlerList, setWrestlerList] = React.useState({ list: baseArrayWrestlers, original: baseArrayWrestlers, loading: false });
    const [wrestlerFilters, setWrestlerFilters] = React.useState({ name: '', show: false, hasFilters: false });

    const getWrestlers = () => {
        return http.get(AppConfig.API_BASE_URL + 'wrestlers/all').then(response => {
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
    }, []);

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;
        const filteredList = wrestlerList.original.filter(wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()));
        setWrestlerList({ ...wrestlerList, list: filteredList });
    };

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = event => {
        const name = event.target.value;
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
        setFilteredWrestlerList(name);
    };

    return { wrestlerList, wrestlerFilters, setShowFilters, changeNameFilters };
}
