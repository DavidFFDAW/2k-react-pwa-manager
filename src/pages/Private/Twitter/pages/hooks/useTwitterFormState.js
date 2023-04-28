import React from 'react';

export default function useTwitterFormState() {
    const initialTwitterFormState = {
        wrestler_id: '',
        message: '',
        device: '',
        likes: 0,
        retweets: 0,
        comments: 0,
    };

    const [formState, setFormState] = React.useState(initialTwitterFormState);

    const setProp = (prop, value) => {
        setFormState(prevState => ({
            ...prevState,
            [prop]: value,
        }));
    };

    const getIdCallback = id => {
        console.log({ id });
        setProp('wrestler_id', id);
    };

    return {
        formState,
        setFormState,
        setProp,
        getIdCallback,
    };
}
