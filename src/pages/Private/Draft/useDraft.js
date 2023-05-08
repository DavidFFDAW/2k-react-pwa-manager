import React from 'react';
import useHttp from '~/hooks/useHttp';
import useAbortRequest from '~/hooks/useAbortRequest';

export default function useDraft(debug) {
    const [draftedWrestlers, setDraftedWrestlers] = React.useState({
        raw: [],
        smackdown: [],
        list: [],
        loading: true,
        selected: false,
        smackdown_select: {
            id: null,
            object: null,
            show: false,
        },
        raw_select: {
            id: null,
            object: null,
            show: false,
        },
    });

    const http = useHttp();
    const aborter = useAbortRequest();
    const endpoint = 'wrestlers/with/championships/active';
    // const endpoint = 'wrestlers/active';
    aborter.requestWithAbort(_ =>
        http.APIGet(endpoint).then(wrestlers => {
            const list = debug ? wrestlers.slice(0, 5) : wrestlers;
            console.log(list);
            setDraftedWrestlers({ ...draftedWrestlers, list: list, loading: false });
        }),
    );

    const getTheID = id => {
        const smackdownSelect = {
            ...draftedWrestlers.smackdown_select,
            id,
        };
        setDraftedWrestlers({ ...draftedWrestlers, smackdown_select: smackdownSelect, selected: false });
    };

    const chooseOwnerWrestler = () => {
        const selectedID = draftedWrestlers.smackdown_select.id;
        const selectedWrestler = draftedWrestlers.list.find(wrestler => wrestler.id === selectedID);
        const selectedObject = {
            id: selectedWrestler.id,
            name: selectedWrestler.name,
            image: selectedWrestler.image,
            championship: selectedWrestler.championship,
        };
        const listAfterSmackDownSelection = draftedWrestlers.list.filter(wrestler => wrestler.id !== selectedID);
        const rawSelect = chooseRawWrestler(selectedWrestler, listAfterSmackDownSelection);

        if (!rawSelect) {
            setDraftedWrestlers({
                ...draftedWrestlers,
                smackdown_select: {
                    ...draftedWrestlers.smackdown_select,
                    object: selectedObject,
                    show: true,
                },
                list: listAfterSmackDownSelection,
                smackdown: [...draftedWrestlers.smackdown, selectedObject],
            });
        } else {
            const restOfList = listAfterSmackDownSelection.filter(wrestler => wrestler.id !== rawSelect.selected.id);

            setDraftedWrestlers({
                ...draftedWrestlers,
                selected: true,
                raw_select: {
                    ...draftedWrestlers.raw_select,
                    object: rawSelect.selected,
                    show: true,
                },
                smackdown_select: {
                    ...draftedWrestlers.smackdown_select,
                    object: selectedObject,
                    show: true,
                },
                list: restOfList,
                smackdown: [...draftedWrestlers.smackdown, selectedObject],
                raw: [...draftedWrestlers.raw, rawSelect.selected],
            });
        }
    };

    const chooseRawWrestler = (smackdownPick, listAfterSmackdownPick) => {
        if (listAfterSmackdownPick.length <= 0) {
            return false;
        }
        const genderList = listAfterSmackdownPick.filter(it => it.sex === smackdownPick.sex);
        const finalGender = genderList.length <= 0 ? listAfterSmackdownPick : genderList;
        const filterCb = it => it.overall >= smackdownPick.overall - 5 && it.overall <= smackdownPick.overall + 5;
        const overallList = finalGender.filter(filterCb);
        const finalList = overallList.length <= 0 ? finalGender : overallList;
        const random = Math.floor(Math.random() * finalList.length);
        const selectedWrestler = finalList[random];
        const selectedObject = {
            id: selectedWrestler.id,
            name: selectedWrestler.name,
            image: selectedWrestler.image,
            championship: selectedWrestler.championship,
        };

        return {
            selected: selectedObject,
        };
    };

    const hideCurrentSmackDown = () => {
        setDraftedWrestlers({
            ...draftedWrestlers,
            smackdown_select: {
                ...draftedWrestlers.smackdown_select,
                show: false,
            },
        });
    };

    const hideCurrentRAW = () => {
        setDraftedWrestlers({
            ...draftedWrestlers,
            raw_select: {
                ...draftedWrestlers.raw_select,
                show: false,
            },
        });
    };

    return {
        draftedWrestlers,
        getTheID,
        chooseOwnerWrestler,
        chooseRawWrestler,
        hideCurrentSmackDown,
        hideCurrentRAW,
    };
}
