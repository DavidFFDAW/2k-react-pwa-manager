import React from 'react';
import useBlogUpsert from './hooks/useBlogUpsert';

export default function BlogUpsert() {
    const { singlePost, functions, params } = useBlogUpsert();

    return <div>BlogUpsert</div>;
}
