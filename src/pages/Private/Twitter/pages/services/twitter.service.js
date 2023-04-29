import { getTwitterRandomNumber } from '~/utilities/random.number.utility';

export const generateTwitterObject = formState => {
    const { author_id, message, device, likes, retweets, comments } = formState;

    const twitterObject = {
        id: formState.id || null,
        author_id,
        message,
        device: device || 'Android',
        likes: likes || getTwitterRandomNumber(),
        retweets: retweets || getTwitterRandomNumber(),
        comments: comments || getTwitterRandomNumber(),
        reply_to: formState.reply_to || null,
    };

    return twitterObject;
};

export const getTwitterObject = response => {
    return {
        id: response.id,
        author_id: response.author_id,
        message: response.message,
        device: response.device,
        likes: response.likes,
        retweets: response.retweets,
        comments: response.comments,
        reply_to: response.reply_to || null,
    };
};
