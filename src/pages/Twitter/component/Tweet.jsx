import { useNavigate } from 'react-router-dom';
import { Likes, Replies, Retweets } from './TweetIcons';
import { numberFormatter } from '~/utilities/number.formatter.utility';
import { transformDate } from '~/utilities/date.normalizer.utility';

export default function Tweet({ tweet, link = true }) {
    const navigate = useNavigate();

    const goToTweet = (ev) => {
        if (!link) return;
        console.log(ev.currentTarget.dataset);
        const tweet = ev.currentTarget.dataset.id;
        if (tweet) return navigate(`/twitter/tweet/${tweet}`);
    };

    const replies = Boolean(tweet.replies) ? tweet.replies.length : 0;
    const twitterAccount = tweet.twitter_account || tweet.twitter_acc || tweet.wrestler_name;


    return (
        <aside style={{ cursor: 'pointer' }} className="tweet" data-id={tweet.id} onClick={goToTweet}>
            <header className="tweet-header">
                <div className="tweet-header-avatar">
                    <img src={tweet.wrestler_image} alt={`${tweet.wrestler_name} twitter pfp`} />
                </div>
                <div className="tweet-header-name">
                    <div className="tweet-header-name-username">
                        <span className="username">{tweet.wrestler_name}</span>
                    </div>
                    <div className="tweet-header-name-account anchor">
                        <span className="account not-needed-arroba">{twitterAccount}</span>
                    </div>
                </div>
                <aside className="tweet-date">
                    {transformDate(tweet.created_at)}
                </aside>
            </header>
            <section className="tweet-content">{
                tweet.message.split(' ').map((word, index) => {
                    if (word.startsWith('#')) {
                        return <a key={index} href={`/twitter/hashtag/${word.slice(1)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2' }}>{word} </a>
                    }
                    if (word.startsWith('@')) {
                        return <a key={index} href={`/twitter/account/${word.slice(1)}`} target="_blank" rel="noopener noreferrer">{word} </a>
                    }
                    return word + ' ';
                })
            }</section>
            <footer className="tweet-footer">
                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Replies />
                    </div>
                    <div className="text">
                        <span>{numberFormatter(replies)}</span>
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
