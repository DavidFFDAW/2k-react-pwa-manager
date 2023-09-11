import React, { useState } from 'react';

const GalleryContext = React.createContext({});

export const GalleryContextProvider = ({ children }) => {
    const [galleryState, setGalleryState] = useState({
        showGallery: false,
        currentImage: null,
        images: []
    });

    const toggleGallery = () => setGalleryState(prev => ({ ...prev, showGallery: !prev.showGallery }));

    return <GalleryContext.Provider value={{ galleryState, setGalleryState, toggleGallery }}>{children}</GalleryContext.Provider>;
};

export const useGalleryContext = _ => React.useContext(GalleryContext);
export default {
    Provider: GalleryContextProvider,
    Consumer: GalleryContext
};
