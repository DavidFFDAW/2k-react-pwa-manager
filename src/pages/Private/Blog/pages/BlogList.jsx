import React from 'react';
import useBlogList from './hooks/useBlogList';
import BlogCard from './components/BlogCard';
import CreateButton from '~/components/Buttons/CreateButton';
import Popup from '~/components/Modal/Popup';
import { DangerButton, InfoButton } from '~/components/Buttons/Buttons';
import Title from '~/components/Title/Title';
import { MaterialIcon } from '~/components/Icon/Icon';
import StatusLabel, { StatusLabelContainer } from '~/components/Status/StatusLabel';

export default function BlogList() {
    const { blogPosts, functions } = useBlogList();
    const isGroupedAction = Object.values(blogPosts.checked).filter(value => Boolean(value)).length > 1;
    // if (blogPosts.loading) return <Spinner />;

    return (
        <>
            <Title title={'Blog'}>
                {/* <div className="flex start">
                    <input type="text" className="custom-input" />
                    <button className="btn">
                        <MaterialIcon icon={'search'} />
                    </button>
                </div> */}
            </Title>
            <StatusLabelContainer>
                <StatusLabel
                    name="all"
                    text={'Todos'}
                    activeLink={blogPosts.currentTab}
                    onClick={functions.filterAll}
                ></StatusLabel>
                <StatusLabel
                    name="published"
                    text={'Publicados'}
                    activeLink={blogPosts.currentTab}
                    onClick={functions.filterPublished}
                ></StatusLabel>
                <StatusLabel
                    name="non-published"
                    text={'No publicados'}
                    activeLink={blogPosts.currentTab}
                    onClick={functions.filterNotPublished}
                ></StatusLabel>
            </StatusLabelContainer>

            <Popup show={isGroupedAction} title={'Acciones agrupadas'}>
                <div class="w1 flex start al-start gap-small">
                    <InfoButton text={'Ocultar publicación (front)'} />
                    <DangerButton text={'Borrar conjunto'} />
                </div>
            </Popup>

            <div className="flex center gap column down">
                {blogPosts.list.map((post, index) => {
                    const key = post.id ? post.id : index;
                    return (
                        <BlogCard
                            post={post}
                            key={key}
                            loading={blogPosts.loading}
                            functions={functions}
                            checks={blogPosts.checked}
                        />
                    );
                })}
            </div>

            <CreateButton endpoint={'blog/create/new'} />
        </>
    );
}
