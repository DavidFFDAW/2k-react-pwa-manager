import React from 'react';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '~/components/RoutesWithNotFound';
import './Blog.css';
// import { TYPES } from '~/constants/UpsertTypes';

const BlogList = React.lazy(() => import('./pages/BlogList'));
// const UpsertPage = React.lazy(() => import('./pages/Upsert'));

export default function WrestlersRouting() {
    return (
        <div className="admin-blog-page">
            <RoutesWithNotFound>
                <Route path="/" element={<BlogList />}></Route>
                <Route path="/post/:id" element={<BlogList />}></Route>
                {/* <Route path={'/page/:page'} element={<WrestlersList />}></Route> */}
                {/* <Route path={'create/new'} element={<UpsertPage type={TYPES.CREATE} />}></Route> */}
                {/* <Route path={'update/:id'} element={<UpsertPage type={TYPES.UPDATE} />}></Route> */}
            </RoutesWithNotFound>
        </div>
    );
}
