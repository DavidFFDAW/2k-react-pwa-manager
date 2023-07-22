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

export function SimpleBlogCard({ title, content, image, creationDate, className }) {
    return (
        <div className={`post boxed flex between gap ${className}`}>
            <div className="w1 blog-separation-image flex start al-start gap">
                <div className="first-column post-image">
                    <Image src={image} className="post-image" />
                </div>

                <div className="w1 second-column flex start al-start gap-small column">
                    <h2 className="blog title uppercase">{title}</h2>
                    <p className="blog content">{content}</p>

                    <NullableLoading condition={creationDate}>
                        <div className="flex end">
                            <p>{transformDate(creationDate)}</p>
                        </div>
                    </NullableLoading>
                </div>
            </div>
        </div>
    );
}

export default function BlogCard({ post, loading, functions, checks = false, actions = true }) {
    if (loading) return <BlogCardLoading />;
    const checkPost = checks[post.id] || false;

    return (
        <div className="post boxed flex between gap" dataid={post.id}>
            <div className="w1 blog-separation-image flex start al-start gap">
                <NullableLoading condition={Boolean(checks)}>
                    <input
                        className="checkbox-grouped-actions"
                        type="checkbox"
                        name="blog-list-checks"
                        onChange={ev => functions.setCheckedState(ev, post.id)}
                        checked={checkPost}
                    />
                </NullableLoading>

                <div className="first-column post-image">
                    <Image src={post.image} className="post-image" />
                </div>

                <div className="w1 second-column flex start gap column">
                    <h2 className="title uppercase">{post.title}</h2>
                    <p>{post.exceptr}</p>
                    <div className="flex end">
                        <p>{transformDate(post.created_at)}</p>
                    </div>
                </div>
            </div>

            <NullableLoading condition={actions}>
                <BlogActions post={post} deletePost={functions.deletePost} />
            </NullableLoading>
        </div>
    );
}
