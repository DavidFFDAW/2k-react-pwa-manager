import { lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthGuard, LoginAuthGuard } from './guards/auth.guard';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { PrivateRoutes, PublicRoutes } from './constants/routes';
import HomeDashboard from './pages/Home/Home';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));
const TwitterRouting = lazy(() => import('./pages/Twitter/PublicTwitterRouting'));

export function Router() {
    return (
        <>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<HomeDashboard/>} />
                    <Route path={PublicRoutes.REGISTER} element={<Login />} />

                    <Route element={<LoginAuthGuard />}>
                        <Route path={PublicRoutes.LOGIN} element={<Login />} />
                    </Route>

                    <Route path={'/twitter/*'} element={<TwitterRouting />} />

                    <Route element={<AuthGuard privateValidation={true} />}>
                        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRoutingModule />} />
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </>
    );
}
