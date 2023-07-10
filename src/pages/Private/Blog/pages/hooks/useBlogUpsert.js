import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TYPES } from '~/constants/UpsertTypes';
import { BlogModel } from '~/models/blog.model.api';

export default function useBlogUpsert(type) {
    const { id } = useParams();
    const blogModel = BlogModel();
    const [singlePost, setSinglePost] = useState({
        id: 0,
    });

    if (type === TYPES.UPDATE) {
        useEffect(_ => {
            // blogModel.getSinglePost(id).then()
        }, []);
    }

    return {
        singlePost,
        params: {
            id,
        },
        functions: {
            setSinglePost,
        },
    };
}
