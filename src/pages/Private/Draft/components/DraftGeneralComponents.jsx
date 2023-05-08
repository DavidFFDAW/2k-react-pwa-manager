import CustomSelect from '~/components/CustomSelect/CustomSelect'

export function DraftSelect({ draftedWrestlers, getTheID }) {
    return (
        <>
            <div className="flex center al-center" style={{ padding: '20px 0' }}>
                <img
                    style={{ maxWidth: '30%' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WWE_SmackDown_%282019%29_Logo.svg/2560px-WWE_SmackDown_%282019%29_Logo.svg.png"
                    alt=""
                />
            </div>
            <div className="w1 relative flex column al-center gap-small space-down">
                {draftedWrestlers.list.length > 0 ? (
                    <CustomSelect
                        list={draftedWrestlers.list}
                        nameProp={'name'}
                        imageProp={'image'}
                        getIdCallback={getTheID}
                        deleteText={draftedWrestlers.selected}
                    />
                ) : (
                    <p>No quedan luchadores que seleccionar</p>
                )}
            </div>
        </>
    )
}

export function DraftButton({ draftedWrestlers, chooseOwnerWrestler }) {
    return (
        <>
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
            ) : null
            }
        </>
    )
}

export function DraftBrandRoster({ draftedWrestlers, brand, imgsrc }) {
    return (
        <div className="w1 brand-roster">
            <header className="gap-small">
                <span>{draftedWrestlers[brand.toLowerCase()].length}</span>
                <img src={imgsrc} alt="" />
            </header>
            <div className="boxed flex center column al-start gap-small">
                {draftedWrestlers[brand.toLowerCase()].map(wrestler => (
                    <p key={wrestler.id}>{wrestler.name}</p>
                ))}
            </div>
        </div>
    )
}

export function DraftDownloadButton({ draftedWrestlers }) {

    const downloadJSONFile = () => {
        const downloadObject = {
            raw: draftedWrestlers.raw,
            smackdown: draftedWrestlers.smackdown,
        }
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(downloadObject, null, 4)], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        const date = new Date().getTime();
        element.download = `Draft_${date}.json`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        element.remove();
    }

    return (
        <div className="flex center al-center">
            <button className='cta' onClick={downloadJSONFile}>Descargar Rosters</button>
        </div>
    );
}

