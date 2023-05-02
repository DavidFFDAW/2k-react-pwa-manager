import { useEffect } from 'react'

export default function useAbortRequest() {
    const aborter = new AbortController();

    const requestWithAbort = (request, dependencies = []) => {
        useEffect(() => {
            request();
            
            return _ => {
                aborter.abort();
            }
        }, dependencies);
    };

    return {
        requestWithAbort
    }
}
