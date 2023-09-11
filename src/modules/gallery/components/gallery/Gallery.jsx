import React from 'react';
import useGallery from './useGallery';
import Spinner from '~/components/Spinner/Spinner';

function Gallery() {
    const { images } = useGallery();
    if (!images.length) return <Spinner />;

    const logMyIndex = e => {
        const index = e.target.dataset.index;
        console.log({ index });
    };

    return (
        <div className="gallery-images-container">
            {images.map((image, index) => (
                <div className="gallery-image" key={index}>
                    <img width={150} height={150} src={image.url} alt={`gallery-${index}`} />

                    <div className="gallery-image-overlay">
                        <button type="button" className="btn btn-primary delete-button" data-index={index} onClick={logMyIndex}>
                            &times;
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
