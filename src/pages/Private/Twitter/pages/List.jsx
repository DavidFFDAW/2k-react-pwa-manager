import React from 'react';
import useTwitter, { TW_TYPES } from '~/hooks/useTwitter';
import { transformDate } from '~/utilities/date.normalizer.utility';
import TwitterCreateButton from '~/components/Twitter/TwitterCreateButton';
import ImagePreview from '~/components/Forms/ImagePreview';
import Actions from '~/components/ListOptions/Actions';
import { CreateIcon, EditIcon } from '~/components/Icons/CommonIcons';
import { FlexBetween } from '~/components/Layouts/Flex';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import Spinner from '~/components/Spinner/Spinner';

export default function TweetsList() {
    const { loading, tweets, stateSetter } = useTwitter(TW_TYPES.ADMIN);

    if (loading) return <Spinner />;

    return (
        <>
            <TwitterCreateButton href={'/admin/twitter/tweet/create'} />
            <div className="flex center al-center column">
                <div className="w90">
                    {tweets.map(tweet => {
                        return (
                            <div key={tweet.id}>
                                <div className="flex start al-start gap boxed" style={{ margin: '20px 0' }}>
                                    <ImagePreview
                                        image={tweet.wrestler_image}
                                        name={tweet.wrestler_name}
                                        px
                                        maxW={110}
                                        maxH={110}
                                    />
                                    <div className="w1 flex column gap-smaller">
                                        <FlexBetween>
                                            <div>
                                                <NullableLoading condition={Boolean(tweet.reply_to)}>
                                                    Es respuesta
                                                </NullableLoading>
                                            </div>
                                            <Actions
                                                stateUpdaterCallback={_ =>
                                                    stateSetter(previous => ({
                                                        ...previous,
                                                        tweets: previous.tweets.filter(item => item.id !== tweet.id),
                                                    }))
                                                }
                                                deleteText={'Borrar tweet'}
                                                deleteEndpoint={`twitter/tweet/delete/${tweet.id}`}
                                                options={[
                                                    {
                                                        href: `/admin/twitter/tweet/update/${tweet.id}`,
                                                        icon: EditIcon,
                                                        text: 'Editar tweet',
                                                    },
                                                    {
                                                        href: `/admin/wrestlers/update/${tweet.author_id}`,
                                                        icon: EditIcon,
                                                        text: `Editar ${tweet.wrestler_name}`,
                                                    },
                                                    {
                                                        href: `/admin/twitter/tweet/create/reply/tweet/${tweet.id}`,
                                                        icon: CreateIcon,
                                                        text: 'Crear comentario',
                                                    },
                                                ]}
                                            />
                                        </FlexBetween>
                                        <h1 style={{ fontSize: 24 }}>{tweet.wrestler_name}</h1>
                                        <p style={{ fontSize: 14, wordBreak: 'break-word' }}>{tweet.message}</p>
                                        <p className="w1 flex end">{transformDate(tweet.created_at)}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
