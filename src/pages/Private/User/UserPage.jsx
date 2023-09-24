import React from 'react';
import Actions from '~/modules/actions/Actions';
import GalleryModule from '~/modules/gallery/GalleryModule';

function UserPage() {
    return (
        <>
            <GalleryModule />
            <Actions.Container>
                <Actions.Option toHref="/user/edit" text="Edit Profile" />
            </Actions.Container>
        </>
    );
}

export default UserPage;
