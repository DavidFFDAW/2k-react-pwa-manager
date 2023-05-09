import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const ChampionsList = React.lazy(() => import('./pages/List'));
const ChampionsCreate = React.lazy(() => import('./pages/Create'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path={'/'} element={<ChampionsList />}></Route>
            <Route path={'/create/team'} element={<ChampionsCreate />}></Route>
        </RoutesWithNotFound>
    );
}
