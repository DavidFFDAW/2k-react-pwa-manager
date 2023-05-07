import { lazy } from 'react';
import Dashboard from './Dashboard/PrivateDashboard';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '~/constants/routes';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const WrestlerRouting = lazy(() => import('./Wrestlers/WrestlersRouting'));
const ReignsRouting = lazy(() => import('./Reigns/ReignsRouting'));
const TeamsRouting = lazy(() => import('./Teams/TeamsRouting'));
const TwitterAdminComponent = lazy(() => import('./Twitter/TwitterAdminRouting'));
const Draft = lazy(() => import('./Draft/Draft'));

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
                <Route path={'/draft'} element={<Draft />}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;
