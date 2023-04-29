import React from 'react';
import useAbortRequest from '~/hooks/useAbortRequest';
import useHttp from '~/hooks/useHttp';

export default function useGlobalWrestlers(endpoint) {
    const http = useHttp();
    const aborter = useAbortRequest();
    const [wrestlers, setWrestlers] = React.useState([]);

    aborter.requestWithAbort(_ => http.APIGet(`wrestlers/${endpoint}`).then(setWrestlers));

    return {
        wrestlers,
    };
}
