import React from 'react';
import { CreateIcon, EditIcon, TrashIcon } from '~/components/Icons/CommonIcons';
import Actions, { ActionTypes, ColorTypes } from '~/components/ListOptions/Actions';
const cutTextLength = 30;

export default function BlogActions({ post, deletePost }) {
    const cuttedText = post.title.length > cutTextLength ? post.title.slice(0, cutTextLength) : post.title;

    return (
        <Actions
            options={[
                {
                    href: `/admin/blog/update/${post.id}`,
                    icon: EditIcon,
                    text: `Editar ${cuttedText}`,
                },
                {
                    href: '/admin/blog/create/new',
                    icon: CreateIcon,
                    text: 'Crear nuevo post',
                },
                {
                    type: ActionTypes.BUTTON,
                    icon: TrashIcon,
                    text: 'Borrar post',
                    callback: deletePost,
                    color: ColorTypes.DELETE,
                },
            ]}
        />
    );
}
