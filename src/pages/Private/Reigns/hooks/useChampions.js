import React from 'react'
import { AppConfig } from '~/AppConfig';
import useHttp from '~/hooks/useHttp';

export default function useChampions() {
    const { get } = useHttp();
    const [champions, setChampions] = React.useState([]);

    React.useEffect(() => {
        get(`${AppConfig.API_BASE_URL}championships/reigns/all`).then((response) => {
            console.log(response);
            setChampions(response);
        });
    }, []);
    
    return { champions };
}
