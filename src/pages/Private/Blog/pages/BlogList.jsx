import React from 'react';
import useBlogList from './hooks/useBlogList';
import BlogCard from './components/BlogCard';
import { makePrivateRoute } from '~/utilities/private.route.utility';
import { PrivateRoutes } from '~/constants/routes';
import CreateButton from '~/components/Buttons/CreateButton';
import Popup from '~/components/Modal/Popup';
import { DangerButton, InfoButton } from '~/components/Buttons/Buttons';

export default function BlogList() {
    const { blogPosts, functions } = useBlogList();
    const isGroupedAction = Object.values(blogPosts.checked).filter(value => Boolean(value)).length > 1;
    // if (blogPosts.loading) return <Spinner />;

    return (
        <>
            <Popup show={isGroupedAction} title={'Acciones agrupadas'}>
                <div class="w1 flex start al-start gap-small">
                    <InfoButton text={'Ocultar publicación (front)'} />
                    <DangerButton text={'Borrar conjunto'} />
                </div>
            </Popup>

            <div className="w1 blog-panel flex center">
                <div className="w90 flex center gap column">
                    {blogPosts.list.map((post, index) => {
                        const key = post.id ? post.id : index;
                        return (
                            <BlogCard
                                post={post}
                                key={key}
                                loading={blogPosts.loading}
                                functions={functions}
                                checks={blogPosts.checked}
                            />
                        );
                    })}
                </div>

                <CreateButton endpoint={'blog/create/new'} />
            </div>
        </>
    );
}
