import React from 'react';
import { generateTwitterObject, getTwitterObject } from '../services/twitter.service';
import useHttp from '~/hooks/useHttp';
import { useNavigate, useParams } from 'react-router-dom';
import { getTwitterRandomNumber } from '~/utilities/random.number.utility';
import useAbortRequest from '~/hooks/useAbortRequest';
import { TYPES } from '~/constants/UpsertTypes';

export default function useTwitterFormState(type, isReply) {
    const http = useHttp();
    const { id } = useParams();
    const navigate = useNavigate();
    const aborter = useAbortRequest();

    const authorKey = 'author_id';

    const initialTwitterFormState = {
        [authorKey]: '',
        message: '',
        device: '',
        likes: getTwitterRandomNumber(),
        retweets: getTwitterRandomNumber(),
        comments: getTwitterRandomNumber(),
    };

    if (isReply) {
        initialTwitterFormState.reply_to = id;
    }

    const [formState, setFormState] = React.useState(initialTwitterFormState);

    if (type === TYPES.UPDATE) {
        aborter.requestWithAbort(_ => http.APIGet(`twitter/tweet/${id}`).then(res => setFormState(getTwitterObject(res))));
    }

    const setProp = (prop, value) => {
        setFormState(prevState => ({
            ...prevState,
            [prop]: value,
        }));
    };

    const getIdCallback = id => {
        setProp(authorKey, id);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const twitterObject = generateTwitterObject(formState);
        console.log({ twitterObject });

        http.APIPost('twitter/tweet/upsert', twitterObject, true).then(_ => {
            navigate('/admin/twitter');
        });
    };

    const handleDeleteTweet = () => {
        if (confirm('¿Seguro que quieres borrar este tweet?')) {
            http.APIDelete(`twitter/tweet/delete/${id}`, {
                success: 'Tweet borrado correctamente',
            }).then(_ => {
                navigate('/admin/twitter');
            });
        }
    };

    return {
        formState,
        setFormState,
        setProp,
        getIdCallback,
        handleSubmitForm,
        handleDeleteTweet,
    };
}
