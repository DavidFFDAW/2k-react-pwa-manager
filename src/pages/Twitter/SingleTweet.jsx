import { ComponentSpinner } from "~/components/Spinner/Spinner";
import useSingleTweet from "~/hooks/useSingleTweet";
import Tweet from "./component/Tweet";
import './twitter.css';

export default function SingleTweet() {
    const { tweetWithReplies } = useSingleTweet();
    if (!tweetWithReplies.id) return <ComponentSpinner />
    const hasReplies = Boolean(tweetWithReplies.replies);
    console.log(tweetWithReplies);

    const css = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        marginTop: '10px',
        paddingLeft: '35px'
    };

    return (
        <>
            <div className="twitter__module">
                <div className="super-container">
                    <div className="cctt">
                        <Tweet tweet={tweetWithReplies} link={false} />

                        {hasReplies ? <div className="tweet-replies" style={css}>
                            {tweetWithReplies.replies.map(reply => <Tweet key={reply.id} tweet={reply} />)}
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    );
}
