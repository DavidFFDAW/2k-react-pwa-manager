import TwitterCreateButton from '~/components/Twitter/TwitterCreateButton';
import { useUserStorage } from '~/contexts/user.context';
import Spinner from '~/components/Spinner/Spinner';
import useTwitter from '~/hooks/useTwitter';
import Tweet from './component/Tweet';
import './twitter.css';

export default function Tweets() {
    const { storedUser } = useUserStorage();
    const { tweets } = useTwitter();

    const AdminButton =
        tweets.length >= 1 && storedUser.id ? (
            <TwitterCreateButton />
        ) : null;

    return (
        <div className="twitter__module">
            {AdminButton}
            <div className="super-container">
                <div className="cctt">{tweets.length > 0 ? tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} replies={tweet.replies.length} />) : <Spinner />}</div>
            </div>
        </div>
    );
}
