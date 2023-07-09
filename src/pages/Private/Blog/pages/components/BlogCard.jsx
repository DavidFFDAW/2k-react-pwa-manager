import React from 'react';
import BlogActions from './BlogActions';
import Image from '~/components/Image/Image';
import { transformDate } from '~/utilities/date.normalizer.utility';
import { DarkSpinner } from '~/components/Spinner/Spinner';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

function BlogCardLoading() {
    return (
        <div className="post boxed flex between gap">
            <div className="w1 flex start al-start gap">
                <div className="first-column flex center al-center post-image">
                    <DarkSpinner />
                </div>
                <div className="w1 second-column flex center" style={{ height: 150 }}>
                    <DarkSpinner />
                </div>
            </div>
        </div>
    );
}

export default function BlogCard({ post, loading, deletePost, actions = true }) {
    if (loading) return <BlogCardLoading />;

    return (
        <div className="post boxed flex between gap">
            <div className="w1 flex start al-start gap">
                <div className="first-column post-image">
                    <Image src={post.image} className="post-image" />
                </div>
                <div className="w1 second-column flex start gap column">
                    <h2 className="title">{post.title}</h2>
                    <p>{post.exceptr}</p>
                    <div className="flex end">
                        <p>{transformDate(post.created_at)}</p>
                    </div>
                </div>
            </div>

            <NullableLoading condition={actions}>
                <BlogActions post={post} deletePost={deletePost} />
            </NullableLoading>
        </div>
    );
}
