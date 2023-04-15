import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Dashboard from './Dashboard/PrivateDashboard';
import { PrivateRoutes } from '~/constants/routes';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const Wrestler = lazy(() => import('./Wrestlers/WrestlersRouting'));

function PrivateRoutingModule() {
    return (
        <>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}></Route>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}></Route>
                <Route path={PrivateRoutes.WRESTLER + '/*'} element={<Wrestler />}></Route>
            </RoutesWithNotFound>
        </>
    );
}

export default PrivateRoutingModule;
