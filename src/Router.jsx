import { lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { AuthGuard, LoginAuthGuard } from './guards/auth.guard';
import { PrivateRoutes, PublicRoutes } from './constants/routes';
import RoutesWithNotFound from './components/RoutesWithNotFound';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));

export function Router() {
    return (
        <>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} replace />} />
                    <Route path={PublicRoutes.REGISTER} element={<Login />} />

                    <Route element={<LoginAuthGuard />}>
                        <Route path={PublicRoutes.LOGIN} element={<Login />} />
                    </Route>

                    <Route element={<AuthGuard privateValidation={true} />}>
                        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRoutingModule />} />
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </>
    );
}
