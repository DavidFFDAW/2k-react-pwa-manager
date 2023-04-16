import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import Upsert from './Upsert';
import { TYPES } from './hooks/useUpsert';

const WrestlersList = React.lazy(() => import('./List'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={'/admin/wrestlers/page/1'} />}></Route>
            <Route path="/page/:page" element={<WrestlersList />}></Route>
            <Route path={'create/new'} element={<Upsert type={TYPES.CREATE} />}></Route>
            <Route path={'update/:id'} element={<Upsert type={TYPES.UPDATE} />}></Route>
        </RoutesWithNotFound>
    );
}
