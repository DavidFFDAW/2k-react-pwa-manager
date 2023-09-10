import { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthGuard, LoginAuthGuard } from './guards/auth.guard';
import RoutesWithNotFound from './components/RoutesWithNotFound';
import { PrivateRoutes, PublicRoutes } from './constants/routes';
import HomeDashboard from './pages/Home/Home';
import { useUserStorage } from './contexts/user.context';
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

    const AppSidebar = storedUser.id ? <Sidebar /> : null;
    const mainClass = storedUser.id ? 'responsive-lockup sidebar-main-margin' : 'responsive-lockup';

    return (
        <>
            <InternetObserver />
            <BrowserRouter>
                {/* {Headers} */}
                {AppSidebar}
                <main className={mainClass}>
                    <section className="boxed-content">
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
                    </section>
                </main>
            </BrowserRouter>
            {/* <CookieAccept /> */}
        </>
    );
}
