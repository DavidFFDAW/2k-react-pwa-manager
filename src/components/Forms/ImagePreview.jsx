export default function ImagePreview({ image, name, maxW, maxH, px = false }) {
    const maxWidth = Number(maxW) ? Number(maxW) : 30;
    const maxHeight = Number(maxH) ? Number(maxH) : 30;
    const convertToPx = max => px ? max : `${max}%`;

    const finalImage = image || '/noimage.jpg';
    const alt = name ? `${name} icon preview` : 'wrestler icon preview';
    const title = name ? `${name} icon preview` : 'wrestler icon preview';

    const errorHandler = target => {
        target.onerror = null;
        target.src = '/noimage.jpg';
        target.title = 'No image';
        target.alt = 'No image';
    };

    const style = {
        maxWidth: convertToPx(maxWidth),
        maxHeight: convertToPx(maxHeight),
        height: convertToPx(maxHeight),
    }

    return <img style={style} className="rounded-preview-icon" src={finalImage} alt={alt} title={title} onError={errorHandler} />;
}
