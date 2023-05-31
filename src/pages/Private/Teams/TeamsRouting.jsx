import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const TeamsList = React.lazy(() => import('./pages/TeamsList'));
const CreateTeam = React.lazy(() => import('./pages/TeamCreation'));
// const TeamDetail = React.lazy(() => import('./pages/Detail'));
// const UpsertPage = React.lazy(() => import('./pages/Upsert'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path={'/'} element={<TeamsList />}></Route>
            <Route path={'/creation'} element={<CreateTeam />}></Route>
            {/* <Route path={'/team/details/:id'} element={<TeamDetail />}></Route> */}
        </RoutesWithNotFound>
    );
}
