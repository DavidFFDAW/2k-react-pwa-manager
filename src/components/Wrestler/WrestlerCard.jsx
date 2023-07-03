import { Link, useLocation } from 'react-router-dom';
import Actions, { ActionTypes } from '../ListOptions/ActionOptions';
import { CreateIcon, EditIcon } from '../Icons/CommonIcons';

export default function WrestlerCard({ wrestler }) {
    const location = useLocation();
    const imageSrc = wrestler.image || '/noimage.jpg';

    const saveCurrentLocation = () => {
        console.log({ loc: location.pathname });
        localStorage.setItem('previousLocation', location.pathname);
    };

    return (
        <>
            <div to={`/admin/wrestlers/update/${wrestler.id}`} className="unlink" onClick={saveCurrentLocation}>
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
                    <Actions
                        options={[
                            {
                                href: `/admin/twitter/tweet/update/${wrestler.id}`,
                                icon: EditIcon,
                                text: 'Editar tweet',
                            },
                            {
                                href: `/admin/wrestlers/update/${wrestler.id}`,
                                icon: EditIcon,
                                text: `Editar ${wrestler.name}`,
                            },
                            {
                                href: `/admin/twitter/tweet/create/reply/tweet/${wrestler.id}`,
                                icon: CreateIcon,
                                text: 'Crear comentario',
                            },
                            {
                                href: `/admin/twitter/tweet/create/reply/tweet/${wrestler.id}`,
                                icon: CreateIcon,
                                text: 'Crear nuevo luchador',
                            },
                            {
                                type: ActionTypes.BUTTON,
                                href: `/admin/twitter/tweet/create/reply/tweet/${wrestler.id}`,
                                icon: CreateIcon,
                                text: 'Despedir',
                                callback: _ => console.log('vas a despedir a este luchador'),
                            },
                        ]}
                    />
                        </div>
                </div>
            </div>
        </>
    );
}
