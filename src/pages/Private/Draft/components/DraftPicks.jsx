import { NullableLoading } from '~/components/Loading/LoadingComponent';
import { PickCard } from './PickCard'

export default function DraftPicks({ draftedWrestlers, userBrand, hideCurrentRAW, hideCurrentSmackDown }) {
    const showSmackDown = draftedWrestlers.smackdown_select.show;
    const showRAW = draftedWrestlers.raw_select.show;

    return (
        <>
            <NullableLoading condition={showSmackDown}>
                <PickCard
                    wrestler={draftedWrestlers.smackdown_select.object}
                    brand={userBrand}
                    hideCurrent={hideCurrentSmackDown}
                />
            </NullableLoading>

            <NullableLoading condition={showRAW && !showSmackDown}>
            <PickCard wrestler={draftedWrestlers.raw_select.object} brand={'RAW'} hideCurrent={hideCurrentRAW} />
            </NullableLoading>
        </>
    )
}
