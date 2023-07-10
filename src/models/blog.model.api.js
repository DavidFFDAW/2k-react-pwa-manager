import { ApiModel } from './api.model';

export const BlogModel = _ => {
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
