import React from 'react';
import Actions, { ActionTypes, ColorTypes } from '~/components/ListOptions/Actions';
import { CreateIcon, EditIcon, HireIcon, ReleaseIcon } from '~/components/Icons/CommonIcons';

export default function WrestlerActions({ wrestler, hire, release, isReleased }) {
    return (
        <Actions
            options={[
                {
                    href: `/admin/wrestlers/update/${wrestler.id}`,
                    icon: EditIcon,
                    text: `Editar ${wrestler.name}`,
                },
                {
                    href: '/admin/wrestlers/create/new',
                    icon: CreateIcon,
                    text: 'Crear nuevo luchador',
                },
                {
                    type: ActionTypes.BUTTON,
                    icon: isReleased ? HireIcon : ReleaseIcon,
                    text: isReleased ? 'Contratar' : 'Despedir',
                    callback: _ => (isReleased ? hire : release)(wrestler.id),
                    color: ColorTypes.WARNING,
                },
            ]}
        />
    );
}
