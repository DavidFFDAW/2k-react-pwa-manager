import React from 'react';
import useGalleryModule from './hooks/useGalleryModule';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

// Everything needed to work within the gallery
// is used here just so when you need or want to use
// the gallery, you can just import this module.
function GalleryModule() {
    const { showGallery, toggleGallery } = useGalleryModule();
    return (
        <>
            <aside className="gallery-module" style={{ zIndex: 10, position: 'relative' }}>
                <button type="button">Abrir Galería</button>
            </aside>
            <NullableLoading condition={showGallery}>
                <div></div>
            </NullableLoading>
        </>
    );
}

export default GalleryModule;
