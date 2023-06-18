import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useWrestlerFilters({ wrestlersList, stateSetter }) {
    const navigate = useNavigate();
    const { page } = useParams();

    const initialState = {
        name: '',
        show: false,
        pagination: true,
        gender: false,
        brand: false,
        results_per_page: 10,
        status: 'active',
    };
    const [wrestlerFilters, setWrestlerFilters] = useState(initialState);

    const setShowFilters = () => {
        setWrestlerFilters(filters => ({ ...filters, show: !filters.show }));
    };

    const changeNameFilters = name => {
        setWrestlerFilters(filters => ({ ...filters, name, hasFilters: Boolean(name) }));
    };

    const filters = originalArray => {
        const { name, brand, gender, status } = wrestlerFilters;

        return originalArray.filter(item => {
            const nameFilter = Boolean(name) ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
            const brandFilter = Boolean(brand) ? item.brand.includes(brand) : true;
            const genderFilter = Boolean(gender) ? item.sex === gender : true;
            const statusFilter = item.status.toLowerCase() === status.toLowerCase();

            return nameFilter && brandFilter && genderFilter && statusFilter;
        });
    };

    const setFilteredWrestlerList = name => {
        const { show } = wrestlerFilters;

        if (!show) return wrestlersList.original;

        const filteredList = filters(wrestlersList.original);
        // const filteredList = wrestlersList.original
        //     .filter(wrestler => show && wrestler.name.toLowerCase().includes(name.toLowerCase()))
        //     .filter(wrestler => wrestler.sex === wrestlerFilters.gender)
        //     .filter(wrestler => wrestler.brand === wrestlerFilters.brand);
        stateSetter(prev => ({
            ...prev,
            list: filteredList,
            hasFilters: true,
            pagination: wrestlerFilters.pagination,
            wrestlersByPage: Number(wrestlerFilters.results_per_page),
        }));
    };

    const resetForm = _ => {
        setWrestlerFilters(prev => ({
            ...prev,
            name: '',
            sex: '',
            pagination: true,
            gender: false,
            brand: false,
            results_per_page: 10,
            status: 'active',
        }));
        stateSetter(pr => ({
            ...pr,
            list: pr.original,
            hasFilters: false,
            pagination: wrestlerFilters.pagination,
            wrestlersByPage: Number(wrestlerFilters.results_per_page),
        }));
    };

    const submitFiltersForm = e => {
        e.preventDefault();

        changeNameFilters(wrestlerFilters.name);
        setFilteredWrestlerList(wrestlerFilters.name);

        if (page && page != 1) {
            navigate('/admin/wrestlers/page/1');
        }
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
