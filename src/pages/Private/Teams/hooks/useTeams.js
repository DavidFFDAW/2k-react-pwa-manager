import { useState } from 'react'
import useAbortRequest from '~/hooks/useAbortRequest';
import useHttp from '~/hooks/useHttp';

export default function useTeams() {
    const http = useHttp();
    const aborter = useAbortRequest();
    const [teams, setTeams] = useState([]);

    aborter.requestWithAbort(_ => http.APIGet('teams/members').then(setTeams));

    return {
        teams,
    }
}
