import React from 'react';
import useTwitter from '~/hooks/useTwitter';
import { transformDate } from '~/utilities/date.normalizer.utility';
import { Link } from 'react-router-dom';
import TwitterCreateButton from '~/components/Twitter/TwitterCreateButton';
import ImagePreview from '~/components/Forms/ImagePreview';
import Actions from '~/components/ListOptions/ActionOptions';
import { CreateIcon, EditIcon, EyeIcon } from '~/components/Icons/CommonIcons';
import { FlexEnd } from '~/components/Layouts/Flex';

export default function TweetsList() {
    const { tweets } = useTwitter();

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
                                        <h1 style={{ fontSize: 24 }}>{tweet.wrestler_name}</h1>
                                        <p style={{ fontSize: 14, wordBreak: 'break-word' }}>{tweet.message}</p>
                                        <p className="w1 flex end">{transformDate(tweet.created_at)}</p>
                                        <FlexEnd>
                                            <Actions
                                                deleteText={'Borrar tweet'}
                                                deleteEndpoint={'adsa'}
                                                options={[
                                                    {
                                                        href: `/admin/twitter/tweet/update/${tweet.id}`,
                                                        icon: EditIcon,
                                                        text: 'Editar tweet',
                                                    },
                                                    {
                                                        href: `/admin/twitter/tweet/update/${tweet.id}`,
                                                        icon: CreateIcon,
                                                        text: 'Crear comentario',
                                                    },
                                                ]}
                                            />
                                        </FlexEnd>
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
