import React from 'react';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import WrestlerCustomSelect from '~/components/CustomSelect/CustomSelect';
import useDraft from './useDraft';
import './draft.css';

function ChosenCard({ wrestler, brand, hideCurrent }) {
    const [show, setShow] = React.useState('appear');

    React.useEffect(() => {
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
    const brandImage = brands[brand.toUpperCase()] || 'https://i.imgur.com/5Z1Z6XN.png';
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
        </div>
    );
}

export default function Draft() {
    const userBrand = 'SmackDown';
    const { draftedWrestlers, getTheID, chooseOwnerWrestler, hideCurrentRAW, hideCurrentSmackDown } = useDraft();

    if (draftedWrestlers.loading) {
        return <ComponentSpinner />;
    }

    return (
        <>
            <div className="draft">
                {draftedWrestlers.smackdown_select.show && (
                    <ChosenCard
                        wrestler={draftedWrestlers.smackdown_select.object}
                        brand={userBrand}
                        hideCurrent={hideCurrentSmackDown}
                    />
                )}

                {draftedWrestlers.raw_select.show && !draftedWrestlers.smackdown_select.show && (
                    <ChosenCard wrestler={draftedWrestlers.raw_select.object} brand={'RAW'} hideCurrent={hideCurrentRAW} />
                )}

                <div className="flex center al-center column gap wrestler-upsert-form">
                    <div className="w90 boxed">
                        <div className="flex center al-center" style={{ padding: '20px 0' }}>
                            <img
                                style={{ maxWidth: '30%' }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WWE_SmackDown_%282019%29_Logo.svg/2560px-WWE_SmackDown_%282019%29_Logo.svg.png"
                                alt=""
                            />
                        </div>
                        <div className="w1 relative flex column al-start gap-small space-down">
                            {draftedWrestlers.list.length > 0 ? (
                                <WrestlerCustomSelect
                                    list={draftedWrestlers.list}
                                    nameProp={'name'}
                                    imageProp={'image'}
                                    getIdCallback={getTheID}
                                />
                            ) : (
                                <p>No quedan luchadores que seleccionar</p>
                            )}
                        </div>

                        {draftedWrestlers.list.length > 0 ? (
                            <div className="flex end al-center">
                                <button
                                    disabled={!Boolean(draftedWrestlers.smackdown_select.id)}
                                    type="button"
                                    className="cta"
                                    onClick={chooseOwnerWrestler}
                                >
                                    Seleccionar
                                </button>
                            </div>
                        ) : null}
                    </div>

                    <div className="w90 boxed flex center al-center column gap wrestler-upsert-form">
                        <div className="w1 flex between al-end gap-small roster-list space-down">
                            <div className="w1 brand-roster">
                                <header className="gap-small">
                                    <span>{draftedWrestlers.raw.length}</span>
                                    <img src="/raw-logo.png" alt="" />
                                </header>
                                <div className="boxed flex center column al-start gap-small">
                                    {draftedWrestlers.raw.map(wrestler => (
                                        <p key={wrestler.id}>{wrestler.name}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="w1 brand-roster">
                                <header className="gap-small">
                                    <span>{draftedWrestlers.smackdown.length}</span>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WWE_SmackDown_%282019%29_Logo.svg/2560px-WWE_SmackDown_%282019%29_Logo.svg.png"
                                        alt=""
                                    />
                                </header>
                                <div className="boxed flex center column al-start gap-small">
                                    {draftedWrestlers.smackdown.map(wrestler => (
                                        <p key={wrestler.id}>{wrestler.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
