import React from 'react';
import { getAllImages } from '../../services/gallery.api.service';

export default function useGallery() {
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        const abortController = new AbortController();

        getAllImages(abortController.signal).then(data => {
            console.log(data);
            setImages(data);
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
