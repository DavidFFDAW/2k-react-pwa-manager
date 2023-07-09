import { useEffect, useState } from 'react';
import { BlogModel } from '~/models/blog.model.api';

export default function useBlogList() {
    const blogModel = BlogModel();
    const initial = {
        loading: true,
        list: Array.from({ length: 10 }).map(i => i + 1),
    };
    const [blogPosts, setBlogPosts] = useState(initial);

    useEffect(_ => {
        const aborter = new AbortController();
        const posts = blogModel.getBlogPosts();
        posts.api.then(postsList => {
            setBlogPosts(previous => ({ ...previous, loading: false, list: postsList }));
        });

        return _ => {
            aborter.abort();
        };
    }, []);

    return {
        blogPosts,
        functions: {
            ...blogModel,
            setBlogPosts,
        },
    };
}
