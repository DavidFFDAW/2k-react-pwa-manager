import {lazy} from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';

const TweetsList = lazy(() => import('./Tweets'));

export default function PublicTwitterRouting() {
  return (
      <RoutesWithNotFound>
          <Route path="/" element={<TweetsList />}></Route>
      </RoutesWithNotFound>
  );
}
