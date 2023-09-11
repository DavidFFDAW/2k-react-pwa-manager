import React from 'react';
import { getAllImages } from '../../services/gallery.api.service';

export default function useGallery() {
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        const abortController = new AbortController();

        getAllImages(abortController.signal).then(data => {
            setImages(data.images);
        });

        return () => {
            abortController.abort();
        };
    }, []);

    return {
        images,
        setImages,
    };
}
