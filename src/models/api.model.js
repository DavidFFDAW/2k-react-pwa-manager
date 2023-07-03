import { AppConfig } from '~/AppConfig';
import HttpService from '~/services/http.service';

const processResponse = (response, notification = false) => {
    if (!response.ok) {
        const message = response.content.message || 'Algo ha ido mal';
        enqueueSnackbar(message, { variant: 'error' });
        throw new Error(message);
    }

    if (notification) {
        const message = notification.success || 'Exito al guardar';
        enqueueSnackbar(message, { variant: 'success' });
    }

    return response.content;
};

const APIUrl = AppConfig.API_BASE_URL;

export const ApiModel = {
    APIendpoint: APIUrl,
    get: (endpoint, notification = false) =>
        HttpService.get(`${APIUrl}${endpoint}`).then(response => processResponse(response, notification)),
    post: (endpoint, data, notification = false) =>
        HttpService.post(`${APIUrl}${endpoint}`, data).then(response => processResponse(response, notification)),
    put: (endpoint, data, notification = false) =>
        HttpService.put(`${APIUrl}${endpoint}`, data).then(response => processResponse(response, notification)),
    delete: (endpoint, notification = false) =>
        HttpService.delete(`${APIUrl}${endpoint}`).then(response => processResponse(response, notification)),
    processResponse,
};
