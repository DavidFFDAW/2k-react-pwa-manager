import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConfig } from '~/AppConfig';
import { TYPES } from '~/constants/UpsertTypes';
import { WrestlerDataModel } from '~/constants/Wrestler';
import useHttp from '~/hooks/useHttp';

export default function useUpsert(type, id) {
    const initialState = { ...WrestlerDataModel, loading: type === TYPES.UPDATE };
    const wrestlerListRoute = localStorage.getItem('previousLocation') || '/admin/wrestlers';
    const navigate = useNavigate();
    const { get, post, deleteReq } = useHttp();
    const [formState, setFormState] = React.useState(initialState);

    const getWrestlerSingleInformation = () => {
        return get(AppConfig.API_BASE_URL + `wrestlers/single/${id}`);
    };

    if (type === TYPES.UPDATE) {
        React.useEffect(() => {
            getWrestlerSingleInformation().then(wrestler => {
                setFormState(pr => ({
                    ...pr,
                    ...wrestler,
                    loading: false,
                }));
            });
        }, [id]);
    }

    const sendForm = ev => {
        ev.preventDefault();
        post(`${AppConfig.API_BASE_URL}wrestlers/upsert`, formState).then(d => {
            navigate(wrestlerListRoute);
        });
    };

    const deleteWrestler = () => {
        const { id, name } = formState;

        if (confirm(`¿ Seguro que quieres borrar ${name} ?`)) {
            deleteReq(`${AppConfig.API_BASE_URL}wrestlers/delete/${id}`).then(d => {
                console.log(d);
                navigate(wrestlerListRoute);
            });
        }
    };

    return { formState, setFormState, sendForm, deleteWrestler };
}
