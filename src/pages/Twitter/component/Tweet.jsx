import { useNavigate } from 'react-router-dom';
import { Likes, Replies, Retweets } from './TweetIcons';
import { numberFormatter } from '~/utilities/number.formatter.utility';

export default function Tweet({ tweet }) {
    const navigate = useNavigate();

    const goToTweet = (ev) => {
        const tweet = ev.currentTarget.dataset.id;
        if (tweet) return navigate(`/twitter/tweet/${tweet}`);
    };

    return (
        <aside className="tweet" data-id={tweet.id} onClick={goToTweet}>
            <header className="tweet-header">
                <div className="tweet-header-avatar">
                    <img src={tweet.wrestler_image} alt="" />
                </div>
                <div className="tweet-header-name">
                    <div className="tweet-header-name-username">
                        <span className="username">{tweet.wrestler_name}</span>
                    </div>
                    <div className="tweet-header-name-account anchor">
                        <span className="account not-needed-arroba">{tweet.twitter_account}</span>
                    </div>
                </div>
            </header>
            <section className="tweet-content">{tweet.message}</section>
            <footer className="tweet-footer">
                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Replies />
                    </div>
                    <div className="text">
                        <span>{numberFormatter(tweet.replies.length)}</span>
                    </div>
                </aside>

                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Retweets />
                    </div>
                    <div className="text">
                        <span>{numberFormatter(tweet.retweets)}</span>
                    </div>
                </aside>

                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Likes />
                    </div>
                    <div className="text">
                        <span>{numberFormatter(tweet.likes)}</span>
                    </div>
                </aside>
            </footer>
        </aside>
    );
}
