import { enqueueSnackbar } from 'notistack';
import HttpService from '~/services/http.service';

export default function useHttp() {
    const processResponse = response => {
        if (!response.ok) {
            const message = response.content.message || 'Something went wrong';
            enqueueSnackbar(message, { variant: 'error' });
            throw new Error(message);
        }

        return response.content;
    };

    const get = url => HttpService.get(url).then(processResponse);
    const post = (url, data) => HttpService.post(url, data).then(processResponse);
    const put = (url, data) => HttpService.put(url, data).then(processResponse);
    const deleteReq = url => HttpService.delete(url).then(processResponse);

    return {
        get,
        post,
        put,
        deleteReq,
    };
}
