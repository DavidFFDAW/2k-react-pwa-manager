import React, { useEffect, useState } from 'react';
import { ConditionalLoading } from '~/components/Loading/LoadingComponent';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import HttpService from '~/services/http.service';

function Gallery() {
    const [gallery, setGallery] = useState({ images: [] });
    useEffect(() => {
        HttpService.get('https://vps-f87b433e.vps.ovh.net/2k/api/v2/images').then(res => {
            setGallery(res.content.data);
        });
    }, []);

    return (
        <div>
            <h1>Gallery</h1>

            <ConditionalLoading condition={gallery.images.length > 0} fallback={<ComponentSpinner />}>
                <div
                    className="grid gallery"
                    style={{ margin: '10px 0', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20 }}
                >
                    {gallery.images.map(image => {
                        console.log({ image });
                        return (
                            <div className="gallery__item">
                                <img width={150} height={150} src={image.url} alt="" />
                            </div>
                        );
                    })}
                </div>
            </ConditionalLoading>
        </div>
    );
}

export default Gallery;
