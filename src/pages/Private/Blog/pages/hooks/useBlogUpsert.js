import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TYPES } from '~/constants/UpsertTypes';
import { BlogService } from '~/services/blog.service';

export default function useBlogUpsert(type) {
    const { id } = useParams();
    const blogService = BlogService();
    const [singlePost, setSinglePost] = useState({
        id: 0,
        title: '',
        image: '',
        content: '',
        exceptr: '',
        published: true,
        is_deletable: false,
        date_publication: '',
    });

    useEffect(_ => {
        if (type === TYPES.UPDATE) {
            blogService.getSinglePost(id).then(post => setSinglePost(p => ({ ...p, ...post, loading: false })));
        }
    }, []);

    const sendForm = event => {
        event.preventDefault();

        const payload = blogService.getBlogPostPayload(singlePost);

        console.log({
            payload,
        });

        blogService.createBlogPost(payload);
    };

    const areFieldsValid = _ => {
        return singlePost.content.length > 3 && singlePost.title.length > 3 && singlePost.image.length > 10;
    };

    return {
        state: {
            post: singlePost,
            updater: setSinglePost,
        },
        functions: {
            sendForm: sendForm,
            areFieldsValid,
        },
    };
}
