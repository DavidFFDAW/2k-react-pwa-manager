import { useEffect, useState } from "react";


export function PickCard({ wrestler, brand, hideCurrent }) {
    const [show, setShow] = useState('appear');

    useEffect(() => {
        const timeout = show === 'appear' ? 1200 : 1000;
        const state = show === 'appear' ? 'disappear' : false;

        setTimeout(() => {
            setShow(state);
            setTimeout(() => {
                hideCurrent();
            }, 500);
        }, timeout);
    }, []);

    if (!show) {
        return null;
    }

    const brands = {
        RAW: '/raw-roster.jpg',
        SMACKDOWN: '/sd-roster.jpg',
    };
    const brandImage = brands[brand.toUpperCase()] || brands.RAW;
    const wrestlerImage = wrestler.image || '/vacant.webp';

    return (
        <div className={`anim-${show}  draft wrestler-card`} style={{ backgroundImage: `url(${brandImage})` }}>
            <div className="draft-wrestler-card-name">
                <span>{wrestler.name}</span>
            </div>
            <div className="draft-wrestler-image">
                <img draggable={false} src={wrestlerImage} alt={wrestler.name} />
            </div>
            {/* {wrestler.championship && (
                <div className="draft-championship-image">
                    <img draggable={false} src={wrestler.championship.image} alt={wrestler.championship.name} />
                </div>
            )} */}
        </div>
    );
}