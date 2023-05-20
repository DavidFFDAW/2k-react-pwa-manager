import { useState } from 'react';

export default function useWrestlerFilters({ wrestlersList, stateSetter }) {
    const [wrestlerFilters, setWrestlerFilters] = useState({ name: '', show: false, hasFilters: false });

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = name => {
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
        setFilteredWrestlerList(name);
    };

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;
        const filteredList = wrestlersList.original.filter(
            wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()),
        );
        stateSetter({ ...wrestlersList, list: filteredList });
    };

    return {
        wrestlerFilters,
        setShowFilters,
        changeNameFilters,
    };
}
