import React from 'react';
import { useParams } from 'react-router-dom';
import useAbortRequest from '~/hooks/useAbortRequest';
import useHttp from '~/hooks/useHttp';

export default function useSingleTwitter() {
    const { id } = useParams();
    const http = useHttp();
    const aborter = useAbortRequest();
    const [tweetWithReplies, setTweetWithReplies] = React.useState({});

    const endpoint = `twitter/${id}`;
    aborter.requestWithAbort(_ => http.APIGet(endpoint).then(setTweetWithReplies));

    return {
        tweetWithReplies,
    };
}
