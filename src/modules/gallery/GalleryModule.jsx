import React from 'react';
import './assets/gallery.css';
import useGalleryModule from './hooks/useGalleryModule';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import Gallery from './components/gallery/Gallery';

// Everything needed to work within the gallery
// is used here just so when you need or want to use
// the gallery, you can just import this module.
function GalleryModule() {
    const { showGallery, toggleGallery } = useGalleryModule();
    return (
        <>
            <aside className="gallery-module" style={{ zIndex: 10, position: 'relative' }}>
                <button type="button" onClick={toggleGallery}>
                    Abrir Galería
                </button>
                <NullableLoading condition={showGallery}>
                    <div className="gallery-container">
                        <header className="gallery-header">
                            <Gallery />
                        </header>
                    </div>
                </NullableLoading>
            </aside>
        </>
    );
}

export default GalleryModule;
