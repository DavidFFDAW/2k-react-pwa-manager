import { Link } from 'react-router-dom';

export default function WrestlerCard({ wrestler }) {
    const imageSrc = wrestler.image || '/noimage.jpg';

    return (
        <>
            <Link to={`/admin/wrestlers/update/${wrestler.id}`} className="unlink">
                <div className="w1 wrestler-center flex center al-center">
                    <div className="w90 flex start al-start gap boxed">
                        <div className="wrestler-card__image flex start al-center column">
                            <img src={imageSrc} alt={wrestler.name} />
                        </div>
                        <div className="w1 wrestler-card__info">
                            <h3 className="wrestler-card__name">{wrestler.name}</h3>
                            <p className="wrestler-card__description"></p>
                            <p>{wrestler.finisher}</p>
                            <p>{wrestler.status}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
