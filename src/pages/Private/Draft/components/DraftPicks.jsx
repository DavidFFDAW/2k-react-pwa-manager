import { PickCard } from './PickCard'

export default function DraftPicks({ draftedWrestlers, userBrand, hideCurrentRAW, hideCurrentSmackDown }) {
    return (
        <>{
            draftedWrestlers.smackdown_select.show && (
                <PickCard
                    wrestler={draftedWrestlers.smackdown_select.object}
                    brand={userBrand}
                    hideCurrent={hideCurrentSmackDown}
                />
            )}

            {draftedWrestlers.raw_select.show && !draftedWrestlers.smackdown_select.show && (
                <PickCard wrestler={draftedWrestlers.raw_select.object} brand={'RAW'} hideCurrent={hideCurrentRAW} />
            )}
        </>
    )
}
