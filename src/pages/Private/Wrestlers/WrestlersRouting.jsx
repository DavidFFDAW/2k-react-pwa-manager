import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import { TYPES } from './hooks/useUpsert';

const WrestlersList = React.lazy(() => import('./List'));
const UpsertPage = React.lazy(() => import('./Upsert'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={'/admin/wrestlers/page/1'} />}></Route>
            <Route path={'/page/:page'} element={<WrestlersList />}></Route>
            <Route path={'create/new'} element={<UpsertPage type={TYPES.CREATE} />}></Route>
            <Route path={'update/:id'} element={<UpsertPage type={TYPES.UPDATE} />}></Route>
        </RoutesWithNotFound>
    );
}
