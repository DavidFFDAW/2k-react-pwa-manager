import React from 'react';

export default function Image({ src, className, alt = 'defaul image', draggable = false, width = 512, height = 512 }) {
    const imageSrc = src || '/noimage.jpg';

    const errorCatch = ({ target }) => {
        target.onerror = null;
        target.src = '/noimage.jpg';
    };

    return (
        <img
            className={className}
            width={width}
            height={height}
            src={imageSrc}
            loading="lazy"
            alt={alt}
            data-src={src}
            draggable={draggable}
            aria-label={alt}
            onError={errorCatch}
        />
    );
}
