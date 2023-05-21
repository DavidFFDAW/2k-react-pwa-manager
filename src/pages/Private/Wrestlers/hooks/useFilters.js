import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useWrestlerFilters({ wrestlersList, stateSetter }) {
    const navigate = useNavigate();
    const [wrestlerFilters, setWrestlerFilters] = useState({
        name: '',
        show: false,
        pagination: true,
        gender: '',
        brand: '',
    });

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = name => {
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
    };

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;
        const filteredList = wrestlersList.original
            .filter(wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()))
            .filter(wrestler => wrestler.sex === wrestlerFilters.gender)
            .filter(wrestler => wrestler.brand === wrestlerFilters.brand);
        stateSetter(prev => ({ ...prev, list: filteredList, hasFilters: true, pagination: wrestlerFilters.pagination }));
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
        navigate('/admin/wrestlers/active/page/1');
    };

    return {
        wrestlerFilters,
        setWrestlerFilters,
        setShowFilters,
        changeNameFilters,
        resetForm,
        submitFiltersForm,
    };
}
