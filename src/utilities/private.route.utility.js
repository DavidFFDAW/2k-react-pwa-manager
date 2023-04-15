import { PrivateRoutes } from '../constants/routes';

export const makePrivateRoute = endpoint => {
    const route = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `/${PrivateRoutes.PRIVATE}/${route}`;
};
