import React, { useEffect } from 'react';
import useAbortRequest from '~/hooks/useAbortRequest';
import useHttp from '~/hooks/useHttp';

export const TW_TYPES = {
    ADMIN: 'ADMIN',
    PUBLIC: 'PUBLIC',
};

export default function useTwitter(type = TW_TYPES.PUBLIC) {
    const http = useHttp();
    const [tweets, setTweets] = React.useState({ tweets: [], loading: true });

    useEffect(_ => {
        const endpoint = type === TW_TYPES.ADMIN ? 'twitter/admin/tweets/list' : 'twitter';
        http.APIGet(endpoint, false).then(response => {
            setTweets(_ => ({
                tweets: response,
                loading: false,
            }));
        });
    }, []);

    return {
        tweets: tweets.tweets,
        loading: tweets.loading,
        stateSetter: setTweets,
    };
}
