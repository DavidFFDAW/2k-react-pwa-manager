import React from 'react'
import useAbortRequest from '~/hooks/useAbortRequest';
import useHttp from '~/hooks/useHttp'

export default function usePublicTwitter() {
      const http = useHttp();
      const aborter = useAbortRequest();
      const [tweets, setTweets] = React.useState([])

      aborter.requestWithAbort(_ => http.APIGet('twitter').then(setTweets))
      
      return {
            tweets
      }
}
