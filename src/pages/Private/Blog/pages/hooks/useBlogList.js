import { useEffect, useState } from 'react';
import { BlogModel } from '~/models/blog.model.api';

export default function useBlogList() {
    const blogModel = BlogModel();
    const initial = {
        loading: true,
        list: Array.from({ length: 10 }).map(i => i + 1),
        checked: {},
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
            setCheckedState: (event, id) => {
                const checked = event.target.checked;
                setBlogPosts(p => ({ ...p, checked: { ...p.checked, [id]: checked } }));
            },
            getCheckedBlogPosts: _ => {
                const checked = Object.entries(blogPosts.checked)
                    .filter(([_, value]) => Boolean(value))
                    .map(item => Number(item[0]));
                console.log({ checked });
            },
        },
    };
}
