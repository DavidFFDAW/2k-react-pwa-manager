import { enqueueSnackbar } from 'notistack';
import { AppConfig } from '~/AppConfig';
import HttpService from '~/services/http.service';

const processResponse = (response, notification = false) => {
    if (!response.ok) {
        console.log({ response });
        const message = response.content.message || 'Algo ha ido mal';
        enqueueSnackbar(message, { variant: 'error', className: 'danger-alert-popup' });
        throw new Error(message);
    }

    if (notification) {
        const message = notification.success || 'Exito al guardar';
        enqueueSnackbar(message, { variant: 'success' });
    }

    return response.content;
};

const APIUrl = AppConfig.API_BASE_URL;

const processRequestWithCatch = (request, notification) => {
    return request
        .then(response => processResponse(response, notification))
        .catch(error => {
            enqueueSnackbar(error.toString(), { variant: 'error' });
            throw new Error(error);
        });
};

export const ApiModel = {
    APIendpoint: APIUrl,
    get: (endpoint, notification = false) => processRequestWithCatch(HttpService.get(`${APIUrl}${endpoint}`), notification),

    post: (endpoint, data, notification = false) =>
        processRequestWithCatch(HttpService.post(`${APIUrl}${endpoint}`, data), notification),

    put: (endpoint, data, notification = false) =>
        processRequestWithCatch(HttpService.put(`${APIUrl}${endpoint}`, data), notification),

    delete: (endpoint, notification = false) =>
        processRequestWithCatch(HttpService.delete(`${APIUrl}${endpoint}`), notification),

    processResponse,
};
