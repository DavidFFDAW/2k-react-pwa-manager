import { lazy, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthGuard, LoginAuthGuard } from './guards/auth.guard';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { PrivateRoutes, PublicRoutes } from './constants/routes';
import HomeDashboard from './pages/Home/Home';
import { useUserStorage } from './contexts/user.context';
import { AdminHeaders } from './components/PageHeaders/Headers';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));
const TwitterRouting = lazy(() => import('./pages/Twitter/PublicTwitterRouting'));

export function Router() {
    const { storedUser } = useUserStorage();

    const Headers = storedUser.id ? <AdminHeaders /> : null;

    useEffect(() => {
        const body = document.body;
        body.classList.add(storedUser.theme);
        return () => {
            body.classList.remove(storedUser.theme);
        };
    }, [storedUser]);

    return (
        <>
            <BrowserRouter>
                {Headers}
                <main className="responsive-lockup">
                    <RoutesWithNotFound>
                        <Route path="/" element={<HomeDashboard />} />
                        <Route path={PublicRoutes.REGISTER} element={<Login />} />

                        <Route element={<LoginAuthGuard />}>
                            <Route path={PublicRoutes.LOGIN} element={<Login />} />
                        </Route>

                        <Route path={'/twitter/*'} element={<TwitterRouting />} />

                        <Route element={<AuthGuard privateValidation={true} />}>
                            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRoutingModule />} />
                        </Route>
                    </RoutesWithNotFound>
                </main>
            </BrowserRouter>
        </>
    );
}
