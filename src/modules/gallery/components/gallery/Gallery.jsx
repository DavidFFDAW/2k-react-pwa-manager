import React from 'react';
import useGallery from './useGallery';

function Gallery() {
    const { images } = useGallery();

    return <div>{JSON.stringify(images)}</div>;
}

export default Gallery;
