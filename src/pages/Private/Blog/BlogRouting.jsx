import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import { TYPES } from '~/constants/UpsertTypes';
import './Blog.css';

const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogUpsert = React.lazy(() => import('./pages/BlogUpsert'));

export default function WrestlersRouting() {
    return (
        <div className="admin-blog-page">
            <RoutesWithNotFound>
                <Route path="/" element={<BlogList />}></Route>
                <Route path={'create/new'} element={<BlogUpsert type={TYPES.CREATE} />}></Route>
                <Route path={'update/:id'} element={<BlogUpsert type={TYPES.UPDATE} />}></Route>
            </RoutesWithNotFound>
        </div>
    );
}
