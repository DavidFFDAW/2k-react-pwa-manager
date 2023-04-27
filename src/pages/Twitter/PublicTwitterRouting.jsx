import { lazy } from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const TweetsList = lazy(() => import('./Tweets'));
const SingleTweet = lazy(() => import('./SingleTweet'));

export default function PublicTwitterRouting() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<TweetsList />}></Route>
            <Route path="/tweet/:id" element={<SingleTweet />}></Route>
        </RoutesWithNotFound>
    );
}
