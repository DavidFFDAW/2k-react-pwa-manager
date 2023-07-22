import { ApiModel } from '../models/api.model';

export const BlogService = _ => {
    return {
        getBlogPosts: _ => {
            const api = ApiModel.get('blog/all');

            return {
                api: api,
            };
        },

        getSinglePost: id => {
            return ApiModel.get(`blog/single/post/${id}`);
        },

        createBlogPost: payload => {
            return ApiModel.post(`blog/upsert`, payload, true);
        },

        getBlogPostPayload: post => {
            return {
                id: post.id ?? 0,
                title: post.title,
                image: post.image,
                content: post.content,
                exceptr: post.content.slice(0, 20),
                published: post.published,
                is_deletable: post.is_deletable,
                date_publication: post.date_publication,
            };
        },

        deletePost: id => {
            const mustDelete = confirm('¿Realmente desea borrar este post?');

            if (mustDelete) {
                console.log('borrado de post');
                // ApiModel.delete('blog/post/:id').then(_ => {
                //     update state after deletion
                // })
            }
        },
    };
};
