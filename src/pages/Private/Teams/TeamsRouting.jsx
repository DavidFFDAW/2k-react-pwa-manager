import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const TeamsList = React.lazy(() => import('./pages/List'));
// const TeamDetail = React.lazy(() => import('./pages/Detail'));
// const UpsertPage = React.lazy(() => import('./pages/Upsert'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path={'/'} element={<TeamsList />}></Route>
            {/* <Route path={'/team/details/:id'} element={<TeamDetail />}></Route> */}
        </RoutesWithNotFound>
    );
}
