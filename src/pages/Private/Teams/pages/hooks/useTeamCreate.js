import { useEffect, useState } from 'react';
import { getPayload, initialTeamState, setTeamWrestlersCallback } from '../services/team.create.service';
import useHttp from '~/hooks/useHttp';

export default function useTeamCreate() {
    const { APIGet } = useHttp();
    const [teamDatas, setTeamData] = useState(initialTeamState);

    useEffect(_ => {
        APIGet('wrestlers/active').then(setTeamWrestlersCallback(setTeamData));
    }, []);

    const getMemberId = id => {
        console.log(id);
    };

    const submitForm = ev => {
        ev.preventDefault();
        const payload = getPayload(teamDatas);
        console.log(payload);
    };

    return {
        teamDatas,
        setTeamData,
        getMemberId,
        submitForm,
    };
}
