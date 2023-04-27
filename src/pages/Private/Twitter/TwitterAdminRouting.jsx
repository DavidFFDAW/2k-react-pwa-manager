import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import { TYPES } from '~/constants/UpsertTypes';

const TweetsList = React.lazy(() => import('./pages/List'));
const TweetsUpsert = React.lazy(() => import('./pages/Upsert'));

export default function WrestlersRouting() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<TweetsList />}></Route>
            <Route path={'/tweet/create'} element={<TweetsUpsert type={TYPES.CREATE} />}></Route>
            <Route path={'/tweet/update/:id'} element={<TweetsUpsert type={TYPES.UPDATE} />}></Route>
        </RoutesWithNotFound>
    );
}
