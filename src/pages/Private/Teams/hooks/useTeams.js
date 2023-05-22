import { useEffect, useState } from 'react'
import useHttp from '~/hooks/useHttp';

export default function useTeams() {
    const http = useHttp();
    const [teams, setTeams] = useState({
        list: [],
        loading: true
    });

    useEffect(_ => {
        http.APIGet('teams/members').then(teams => {
            setTeams(p => ({ ...p, loading: false, list: teams }))
        });

        return _ => {
            const abort = new AbortController();
            abort.abort();
        }
    }, [])

    return {
        teams,
    }
}
