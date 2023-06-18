import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConfig } from '~/AppConfig';
import { TYPES } from '~/constants/UpsertTypes';
import { WrestlerDataModel } from '~/constants/Wrestler';
import useHttp from '~/hooks/useHttp';

export default function useUpsert(type, id) {
    const initialState = { ...WrestlerDataModel, loading: type === TYPES.UPDATE };
    const wrestlerListRoute = localStorage.getItem('previousLocation') || '/admin/wrestlers';
    const http = useHttp();
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState(initialState);

    const getWrestlerSingleInformation = () => {
        return http.APIGet(`wrestlers/single/${id}`);
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
        console.log(JSON.stringify(formState));
        http.APIPost('wrestlers/upsert', formState, true).then(d => {
            navigate(wrestlerListRoute);
        });
    };

    const deleteWrestler = () => {
        const { id, name } = formState;

        if (confirm(`¿ Seguro que quieres borrar ${name} ?`)) {
            http.APIDelete(`wrestlers/delete/${id}`, { message: 'Luchador borrado correctamente' }).then(d => {
                // console.log(d);
                navigate(wrestlerListRoute);
            });
        }
    };

    return { formState, setFormState, sendForm, deleteWrestler };
}
