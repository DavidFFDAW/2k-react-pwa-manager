import { Link, useLocation } from 'react-router-dom';

export default function WrestlerCard({ wrestler }) {
    const location = useLocation();
    const imageSrc = wrestler.image || '/noimage.jpg';

    const saveCurrentLocation = () => {
        console.log({ loc: location.pathname });
        localStorage.setItem('previousLocation', location.pathname);
    };

    return (
        <>
            <Link to={`/admin/wrestlers/update/${wrestler.id}`} className="unlink" onClick={saveCurrentLocation}>
                <div className="w1 wrestler-center flex center al-center">
                    <div className="w90 flex start al-start gap boxed">
                        <div className="wrestler-card__image flex start al-center column">
                            <img src={imageSrc} alt={wrestler.name} width={512} height={512} />
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
