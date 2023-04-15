import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../constants/routes';
import { isUserPersisted } from '../services/auth.service';

const IsNotValidated = <Navigate replace to={PublicRoutes.LOGIN} />;
const IsAlreadyLoggedIn = <Navigate replace to={PrivateRoutes.PRIVATE} />;
const RenderOutlet = <Outlet />;

export function AuthGuard({ privateValidation }) {
    const isUserLoggedIn = isUserPersisted();
    return isUserLoggedIn && privateValidation ? RenderOutlet : IsNotValidated;
}

export function LoginAuthGuard() {
    const isUserLoggedIn = isUserPersisted();
    return isUserLoggedIn ? IsAlreadyLoggedIn : RenderOutlet;
}
