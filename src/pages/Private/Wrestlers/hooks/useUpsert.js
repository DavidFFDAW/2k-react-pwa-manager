import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConfig } from '~/AppConfig';
import { WrestlerDataModel } from '~/constants/Wrestler';
import useHttp from '~/hooks/useHttp';

export const TYPES = {
    CREATE: 'create',
    UPDATE: 'update',
};

export default function useUpsert(type, id) {
    const { get } = useHttp();
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
        console.log(JSON.stringify(formState));
        const redirect = '/admin/wrestlers';
        navigate(redirect);
    };

    return { formState, setFormState, sendForm };
}
