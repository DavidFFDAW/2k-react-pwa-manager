import Actions, { ActionTypes } from '../../../../components/ListOptions/ActionOptions';
import { CreateIcon, EditIcon, HireIcon, ReleaseIcon } from '../../../../components/Icons/CommonIcons';

export default function WrestlerCard({ wrestler, hire, release }) {
    const imageSrc = wrestler.image || '/noimage.jpg';
    const isReleased = wrestler.status === 'released';

    return (
        <>
            <div className="unlink">
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
                                    href: `/admin/wrestlers/update/${wrestler.id}`,
                                    icon: EditIcon,
                                    text: `Editar ${wrestler.name}`,
                                },
                                {
                                    href: '/admin/wrestlers/create/new',
                                    icon: CreateIcon,
                                    text: 'Crear nuevo luchador',
                                },
                                {
                                    type: ActionTypes.BUTTON,
                                    icon: isReleased ? HireIcon : ReleaseIcon,
                                    text: isReleased ? 'Contratar' : 'Despedir',
                                    callback: _ => (isReleased ? hire : release)(wrestler.id),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
