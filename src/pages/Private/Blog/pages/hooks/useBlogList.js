import { useEffect, useState } from 'react';
import { BlogService } from '~/services/blog.service';

export default function useBlogList() {
    const blogService = BlogService();
    const initial = {
        loading: true,
        list: Array.from({ length: 10 }).map(i => i + 1),
        checked: {},
        currentTab: 'all',
    };
    const [blogPosts, setBlogPosts] = useState(initial);

    useEffect(_ => {
        const aborter = new AbortController();
        const posts = blogService.getBlogPosts();
        posts.api.then(postsList => {
            setBlogPosts(previous => ({ ...previous, loading: false, list: postsList, original: postsList }));
        });
        console.log(blogPosts);

        return _ => {
            aborter.abort();
        };
    }, []);

    return {
        blogPosts,
        functions: {
            ...blogService,
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
            filterAll: _ => {
                setBlogPosts(prev => ({
                    ...prev,
                    list: prev.original,
                    currentTab: 'all',
                }));
            },
            filterPublished: () => {
                setBlogPosts(prev => ({
                    ...prev,
                    list: prev.original.filter(item => item.visible),
                    currentTab: 'published',
                }));
            },
            filterNotPublished: () => {
                setBlogPosts(prev => ({
                    ...prev,
                    list: prev.original.filter(item => !item.visible),
                    currentTab: 'non-published',
                }));
            },
        },
    };
}
