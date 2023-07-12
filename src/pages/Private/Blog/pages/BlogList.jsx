import React from 'react';
import useBlogList from './hooks/useBlogList';
import BlogCard from './components/BlogCard';
import { makePrivateRoute } from '~/utilities/private.route.utility';
import { PrivateRoutes } from '~/constants/routes';
import CreateButton from '~/components/Buttons/CreateButton';

export default function BlogList() {
    const { blogPosts, functions } = useBlogList();

    // if (blogPosts.loading) return <Spinner />;

    return (
        <>
            <button type="button" onClick={functions.getCheckedBlogPosts}>
                Obtener seleccionados
            </button>
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
                <CreateButton endpoint={makePrivateRoute(PrivateRoutes.BLOG) + '/upsert'} />
            </div>
        </>
    );
}
