import React from 'react';
import useHttp from '~/hooks/useHttp';

export default function Gallery() {
    const { get } = useHttp();
    const [images, setImages] = React.useState([]);
    const API = 'https://vps-f87b433e.vps.ovh.net/2k/api/v2';

    React.useEffect(() => {
        get(API).then(response => {
            setImages(response.data);
        });
    }, []);

    return (
        <div className="gallery">
            {images.map((image, indx) => (
                <div key={indx}>
                    <img style={{ maxWidth: '100%' }} src={image.url} alt={image.title} />
                </div>
            ))}
        </div>
    );
}
