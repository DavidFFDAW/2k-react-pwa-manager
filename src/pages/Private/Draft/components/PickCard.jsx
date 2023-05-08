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
        RAW: '/raw.png',
        SMACKDOWN: '/smackdown.jpg',
    };
    console.log(wrestler);
    const brandImage = brands[brand.toUpperCase()] || 'https://i.imgur.com/5Z1Z6XN.png';
    // TODO: vacant image 512x512
    // TODO: RAW image to 72x72
    // TODO: SmackDown image to 72x72
    const wrestlerImage =
        wrestler.image ||
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/307c21f9-99cb-4088-b4ed-5c65cb4dcf94/df3af9t-2837e86e-9087-429b-875b-a2fe96c58a9b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwN2MyMWY5LTk5Y2ItNDA4OC1iNGVkLTVjNjVjYjRkY2Y5NFwvZGYzYWY5dC0yODM3ZTg2ZS05MDg3LTQyOWItODc1Yi1hMmZlOTZjNThhOWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bzyK8J91a-XllC1e0LuXeSr2lXIKmbsBhrq04megICo';

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