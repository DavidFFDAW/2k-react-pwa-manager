import React from 'react';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import { DraftSelect, DraftBrandRoster, DraftButton, DraftDownloadButton } from './components/DraftGeneralComponents';
import DraftPicks from './components/DraftPicks';
import useDraft from './useDraft';
import './draft.css';


export default function Draft() {
    const userBrand = 'SmackDown';
    const { draftedWrestlers, getTheID, chooseOwnerWrestler, hideCurrentRAW, hideCurrentSmackDown }
        = useDraft(false);

    if (draftedWrestlers.loading) {
        return <ComponentSpinner />;
    }

    return (
        <>
            <div className="draft">
                <DraftPicks
                    userBrand={userBrand}
                    draftedWrestlers={draftedWrestlers}
                    hideCurrentRAW={hideCurrentRAW}
                    hideCurrentSmackDown={hideCurrentSmackDown}
                />

                <div className="flex center al-center column gap wrestler-upsert-form">
                    <div className="w90 boxed">
                        <DraftSelect draftedWrestlers={draftedWrestlers} getTheID={getTheID} />
                        <DraftButton draftedWrestlers={draftedWrestlers} chooseOwnerWrestler={chooseOwnerWrestler} />

                        {draftedWrestlers.list.length === 0 && (
                            <DraftDownloadButton
                                draftedWrestlers={draftedWrestlers}
                            />
                        )}
                    </div>

                    <div className="w90 boxed flex center al-center column gap wrestler-upsert-form">
                        <div className="w1 flex between al-start gap-small roster-list space-down">
                            <DraftBrandRoster
                                draftedWrestlers={draftedWrestlers}
                                brand={'RAW'}
                                imgsrc={'/raw-logo.png'}
                            />
                            <DraftBrandRoster
                                draftedWrestlers={draftedWrestlers}
                                brand={'SmackDown'}
                                imgsrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WWE_SmackDown_%282019%29_Logo.svg/2560px-WWE_SmackDown_%282019%29_Logo.svg.png'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
