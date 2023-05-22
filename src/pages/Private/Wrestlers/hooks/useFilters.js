import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useWrestlerFilters({ wrestlersList, stateSetter }) {
    const navigate = useNavigate();
    const initialState = {
        name: '',
        show: false,
        pagination: true,
        gender: false,
        brand: false,
        results_per_page: 10
    };
    const [wrestlerFilters, setWrestlerFilters] = useState(initialState);

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = name => {
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
    };


    const filters = (originalArray) => {
        const { name, brand, gender } = wrestlerFilters;

        return originalArray.filter(item => { 
            const nameFilter = Boolean(name) ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
            const brandFilter = Boolean(brand) ? item.brand.includes(brand) : true;
            const genderFilter = Boolean(gender) ? item.sex === gender : true;

            return nameFilter && brandFilter && genderFilter;
        });
    }

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;

        if (!show) return wrestlersList.original;

        const filteredList = filters(wrestlersList.original);
        // const filteredList = wrestlersList.original
        //     .filter(wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()))
        //     .filter(wrestler => wrestler.sex === wrestlerFilters.gender)
        //     .filter(wrestler => wrestler.brand === wrestlerFilters.brand);
        stateSetter(prev => ({ ...prev, list: filteredList, hasFilters: true, pagination: wrestlerFilters.pagination, wrestlersByPage: Number(wrestlerFilters.results_per_page) }));
    };

    const resetForm = _ => {
        setWrestlerFilters(prev => ({
            ...prev,
            name: '',
            sex: '',
            pagination: true,
            gender: false,
            brand: false,
            results_per_page: 10
        }));
        stateSetter(pr => ({ ...pr, list: pr.original, hasFilters: false, pagination: wrestlerFilters.pagination, wrestlersByPage: Number(wrestlerFilters.results_per_page) }));
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
