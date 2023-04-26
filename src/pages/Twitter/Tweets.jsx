import React from 'react'
import usePublicTwitter from './hooks/usePublicTwitter'
import { useUserStorage } from '~/contexts/user.context';

export default function Tweets() {
      const { storedUser } = useUserStorage();
      const { tweets } = usePublicTwitter();

      console.log(storedUser);
      console.log(tweets);

      return (
            <div>Tweets</div>
      )
}
