import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthGuard, LoginAuthGuard } from './guards/auth.guard';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { PrivateRoutes, PublicRoutes } from './constants/routes';
import HomeDashboard from './pages/Home/Home';
import { useUserStorage } from './contexts/user.context';
import { AdminHeaders } from './components/PageHeaders/Headers';
import { ErrorBoundary } from './components/ErrorBoundary';
import InternetObserver from './components/InternetObserver';
// import CookieAccept from './components/CookieAccept';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarSpinner } from './components/Spinner/Spinner';

const Login = lazy(() => import('./pages/Login'));
const PrivateRoutingModule = lazy(() => import('./pages/Private/PrivateRoutingModule'));
const TwitterRouting = lazy(() => import('./pages/Twitter/PublicTwitterRouting'));

export function Router() {
    const { storedUser } = useUserStorage();

    const Headers = storedUser.id ? <AdminHeaders /> : null;
    const AppSidebar = storedUser.id ? <Sidebar /> : null;
    const mainClass = storedUser.id ? 'responsive-lockup sidebar-main-margin' : 'responsive-lockup';

    // useEffect(() => {
    //     const body = document.body;
    //     body.classList.add(storedUser.theme);
    //     document.documentElement.setAttribute('class', storedUser.theme);

    //     return () => {
    //         body.classList.remove(storedUser.theme);
    //     };
    // }, [storedUser]);

    return (
        <>
            <InternetObserver />
            <BrowserRouter>
                {/* {Headers} */}
                {AppSidebar}
                <main className={mainClass}>
                    <Suspense fallback={<SidebarSpinner />}>
                        <ErrorBoundary>
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
                        </ErrorBoundary>
                    </Suspense>
                </main>
            </BrowserRouter>
            {/* <CookieAccept /> */}
        </>
    );
}
