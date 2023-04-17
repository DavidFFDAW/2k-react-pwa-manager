import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const ChampionsList = React.lazy(() => import('./pages/List'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path={'/'} element={<ChampionsList />}></Route>
        </RoutesWithNotFound>
    );
}
