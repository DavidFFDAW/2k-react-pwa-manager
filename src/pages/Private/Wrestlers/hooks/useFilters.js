import { useState } from 'react';

export default function useWrestlerFilters({ wrestlersList, stateSetter }) {
    const [wrestlerFilters, setWrestlerFilters] = useState({
        name: '',
        show: false,
        pagination: true,
    });

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = name => {
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
    };

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;
        const filteredList = wrestlersList.original.filter(
            wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()),
        );
        stateSetter({ ...wrestlersList, list: filteredList, hasFilters: true });
    };

    const resetForm = _ => {
        setWrestlerFilters(prev => ({
            ...prev,
            name: '',
            sex: '',
            pagination: true,
        }));
        stateSetter(pr => ({ ...pr, list: pr.original, hasFilters: false }));
    };

    const submitFiltersForm = e => {
        e.preventDefault();

        changeNameFilters(wrestlerFilters.name);
        setFilteredWrestlerList(wrestlerFilters.name);
    };

    return {
        wrestlerFilters,
        setShowFilters,
        changeNameFilters,
        resetForm,
        submitFiltersForm,
    };
}
