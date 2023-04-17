import { lazy } from 'react';
import Dashboard from './Dashboard/PrivateDashboard';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '~/constants/routes';
import { AdminHeaders } from '~/components/PageHeaders/Headers';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const WrestlerRouting = lazy(() => import('./Wrestlers/WrestlersRouting'));
const ReignsRouting = lazy(() => import('./Reigns/ReignsRouting'));

function PrivateRoutingModule() {
    return (
        <>
            <AdminHeaders />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}></Route>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
                <Route path={PrivateRoutes.WRESTLER + '/*'} element={<WrestlerRouting />}></Route>
                <Route path={PrivateRoutes.CHAMPIONS + '/*'} element={<ReignsRouting />}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;
