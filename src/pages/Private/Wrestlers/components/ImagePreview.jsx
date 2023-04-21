export default function ImagePreview({ image, name }) {
    const finalImage = image || '/noimage.jpg';
    const alt = name ? `${name} icon preview` : 'wrestler icon preview';
    const title = name ? `${name} icon preview` : 'wrestler icon preview';

    const errorHandler = target => {
        target.onerror = null;
        target.src = '/noimage.jpg';
        target.title = 'No image';
        target.alt = 'No image';
    };

    return <img style={{ maxWidth: '30%' }} className="rounded-preview-icon" src={finalImage} alt={alt} title={title} onError={errorHandler} />;
}
