import { lazy } from 'react';
import Dashboard from './Dashboard/PrivateDashboard';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '~/constants/routes';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const WrestlerRouting = lazy(() => import('./Wrestlers/WrestlersRouting'));
const ReignsRouting = lazy(() => import('./Reigns/ReignsRouting'));
const TeamsRouting = lazy(() => import('./Teams/TeamsRouting'));
const TwitterAdminComponent = lazy(() => import('./Twitter/TwitterAdminRouting'));
const BlogRouting = lazy(() => import('./Blog/BlogRouting'));
const Draft = lazy(() => import('./Draft/Draft'));
const TestElement = lazy(() => import('./TestPage'));

function PrivateRoutingModule() {
    return (
        <>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}></Route>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
                <Route path={PrivateRoutes.WRESTLER + '/*'} element={<WrestlerRouting />}></Route>
                <Route path={PrivateRoutes.CHAMPIONS + '/*'} element={<ReignsRouting />}></Route>
                <Route path={PrivateRoutes.TEAMS + '/*'} element={<TeamsRouting />}></Route>
                <Route path={PrivateRoutes.TWITTER + '/*'} element={<TwitterAdminComponent />}></Route>
                <Route path={PrivateRoutes.BLOG + '/*'} element={<BlogRouting />}></Route>
                <Route path={'/draft'} element={<Draft />}></Route>
                <Route path={'/test'} element={<TestElement />}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;
