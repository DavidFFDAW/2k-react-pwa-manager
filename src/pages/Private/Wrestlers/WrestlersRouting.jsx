import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import { TYPES } from '~/constants/UpsertTypes';

const WrestlersList = React.lazy(() => import('./List'));
const UpsertPage = React.lazy(() => import('./Upsert'));

export default function WrestlersRouting() {
    return (
        <div className="admin-wrestlers-page">
            <RoutesWithNotFound>
                <Route path="/" element={<WrestlersList />}></Route>
                <Route path={'/page/:page'} element={<WrestlersList />}></Route>
                <Route path={'create/new'} element={<UpsertPage type={TYPES.CREATE} />}></Route>
                <Route path={'update/:id'} element={<UpsertPage type={TYPES.UPDATE} />}></Route>
            </RoutesWithNotFound>
        </div>
    );
}
