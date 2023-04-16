import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const WrestlersList = React.lazy(() => import('./List'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={'/admin/wrestlers/page/1'} />}></Route>
            <Route path="/page/:page" element={<WrestlersList />}></Route>
            <Route path={'create/new'} element={<h1>Create</h1>}></Route>
            <Route path={'update/:id'} element={<h1>Update</h1>}></Route>
        </RoutesWithNotFound>
    );
}
