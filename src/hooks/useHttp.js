import { enqueueSnackbar } from 'notistack';
import { AppConfig } from '~/AppConfig';
import HttpService from '~/services/http.service';

export default function useHttp() {
    const processResponse = (response, notification = false) => {
        if (!response.ok) {
            const message = response.content.message || 'Something went wrong';
            enqueueSnackbar(message, { variant: 'error' });
            throw new Error(message);
        }

        if (notification) {
            const message = notification.success || 'Exito al guardar';
            enqueueSnackbar(message, { variant: 'success' });
        }

        return response.content;
    };

    const API = AppConfig.API_BASE_URL;
    const get = (url, notification = false) => HttpService.get(url).then(response => processResponse(response, notification));
    const post = (url, data, notification = false) => HttpService.post(url, data).then(response => processResponse(response, notification));
    const put = (url, data, notification = false) => HttpService.put(url, data).then(response => processResponse(response, notification));
    const deleteReq = (url, notification = false) => HttpService.delete(url).then(response => processResponse(response, notification));

    return {
        get,
        post,
        put,
        deleteReq,
        APIGet: (endpoint, notif) => get(`${API}${endpoint}`, notif),
        APIPost: (endpoint, data, notif) => post(`${API}${endpoint}`, data, notif),
        APIPut: (endpoint, data, notif) => put(`${API}${endpoint}`, data, notif),
        APIDelete: (endpoint, notif) => deleteReq(`${API}${endpoint}`, notif),
    };
}
