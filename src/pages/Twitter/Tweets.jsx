import usePublicTwitter from './hooks/usePublicTwitter';
import { useUserStorage } from '~/contexts/user.context';
import Tweet from './component/Tweet';
import './twitter.css';
import { Link } from 'react-router-dom';
import Spinner from '~/components/Spinner/Spinner';
import { NewTweet } from './component/TweetIcons';

export default function Tweets() {
    const { storedUser } = useUserStorage();
    const { tweets } = usePublicTwitter();

    const twitterModuleCss = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
    };

    const AdminButton =
        tweets.length >= 1 && storedUser.id ? (
            <Link to={'/admin/twitter'}>
                <button className="fixed btn got-to-admin">
                    <NewTweet size={25} />
                </button>
            </Link>
        ) : null;

    return (
        <div className="twitter__module" style={twitterModuleCss}>
            {AdminButton}
            <div className="super-container">
                <div className="cctt">{tweets.length > 0 ? tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />) : <Spinner />}</div>
            </div>
        </div>
    );
}
