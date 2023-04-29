import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConfig } from '~/AppConfig';
import { TYPES } from '~/constants/UpsertTypes';
import { WrestlerDataModel } from '~/constants/Wrestler';
import useHttp from '~/hooks/useHttp';

export default function useUpsert(type, id) {
    const wrestlerListRoute = localStorage.getItem('previousLocation') || '/admin/wrestlers';
    const { get, post, deleteReq } = useHttp();
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState(WrestlerDataModel);

    const getWrestlerSingleInformation = () => {
        return get(AppConfig.API_BASE_URL + `wrestlers/single/${id}`);
    };

    if (type === TYPES.UPDATE) {
        React.useEffect(() => {
            getWrestlerSingleInformation().then(wrestler => {
                setFormState(wrestler);
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
