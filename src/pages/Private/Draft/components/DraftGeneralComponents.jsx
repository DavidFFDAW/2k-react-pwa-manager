import CustomSelect from '~/components/CustomSelect/CustomSelect'
import { FlexBetween } from '~/components/Layouts/Flex';
import { ConditionalLoading, NullableLoading } from '~/components/Loading/LoadingComponent'

export function DraftSelect({ draftedWrestlers, getTheID }) {
    return (
        <>
            <div className="flex center al-center" style={{ padding: '20px 0' }}>
                <img
                    style={{ maxWidth: '30%' }}
                    src="/smackdown-logo.webp"
                    alt=""
                />
            </div>
            <div className="w1 relative flex column al-center gap-small space-down">
                <ConditionalLoading condition={!draftedWrestlers.loading}>
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
                </ConditionalLoading>
            </div>
        </>
    )
}

export function DraftButton({ draftedWrestlers, chooseOwnerWrestler }) {
    return (
        <>
            <NullableLoading condition={!draftedWrestlers.loading && draftedWrestlers.list.length > 0}>
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
            </NullableLoading>
        </>
    )
}

export function DraftBrandRoster({ draftedWrestlers, brand, imgsrc }) {
    const roster = draftedWrestlers[brand.toLowerCase()];
    const maleRoster = roster.filter(item => item.sex === 'M');
    const femaleRoster = roster.length - maleRoster.length;

    return (
        <div className="w1 brand-roster">
            <header className="al-center gap-small">
                <img src={imgsrc} alt="" />
            </header>

            <section className='w1 flex al-center center column padded'>
                <FlexBetween align={'center'} gap={'small'}>
                    <p>Hombres: </p>
                    <span>{maleRoster.length}</span>
                </FlexBetween>
                <FlexBetween align={'center'} gap={'small'}>
                    <p>Mujeres: </p>
                    <span>{femaleRoster}</span>
                </FlexBetween>
            </section>

            <NullableLoading condition={draftedWrestlers.raw.length > 0}>
                <div className="boxed clear flex center column al-start gap-small">
                    {draftedWrestlers[brand.toLowerCase()].map(wrestler => (
                        <p key={wrestler.id}>{wrestler.name}</p>
                    ))}
                </div>
            </NullableLoading>
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

