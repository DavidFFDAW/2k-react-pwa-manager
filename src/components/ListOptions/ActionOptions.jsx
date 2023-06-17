import React, { useState } from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';
import { Link } from 'react-router-dom';
import { DotsIcon, TrashIcon } from '../Icons/CommonIcons';
import { DialogWithFooter } from '../Modal/Dialog';
import { DangerButton } from '../Buttons/Buttons';

function ActionOption({ item, toggler }) {
    return (
        <Link className="flex start al-center gap-small action-link" to={item.href} onClick={toggler}>
            <NullableLoading condition={item.icon}>
                <div className="icon-wrapper">
                    <item.icon />
                </div>
            </NullableLoading>
            <h4 className="action-text">{item.text}</h4>
        </Link>
    );
}

function DeleteAction({ text, endpoint, toggler }) {
    const [showModal, setModal] = useState(false);
    const toggleModal = _ => setModal(pr => !pr);
    const deleteItem = _ => {
        toggleModal();
        console.log('Borrando Item', endpoint);
        toggler();
        /**
         * codigo de ejecucion de borrado por peticion http
         */
    };

    const footer = <DangerButton type={'button'} text={'Borrar'} onClick={deleteItem} />;

    return (
        <>
            <NullableLoading condition={showModal}>
                <DialogWithFooter visible={showModal} toggleVisibility={toggleModal} footer={footer}>
                    ¿ Estás seguro de que quieres borrar este item ?
                </DialogWithFooter>
            </NullableLoading>

            <div className="flex start al-center gap-small action-link delete-action" onClick={toggleModal}>
                <div className="icon-wrapper">
                    <TrashIcon fill={'#d80000'} />
                </div>
                <h4 className="action-text">{text}</h4>
            </div>
        </>
    );
}

export default function Actions({ deleteText, deleteEndpoint, options }) {
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOpts = _ => setShowOptions(show => !show);
    const hasOptions = options && options.length > 0;
    const hasDelete = Boolean(deleteEndpoint) && deleteEndpoint.length > 0;

    return (
        <NullableLoading condition={hasOptions}>
            <div className="actions-option-group relative">
                <button
                    className={`three-dots-actions ${showOptions ? 'active' : 'normal'}`}
                    role="button"
                    aria-label="Open actions list"
                    type="button"
                    onClick={toggleShowOpts}
                >
                    <DotsIcon />
                </button>
                <NullableLoading condition={showOptions}>
                    <div className="actions-group-actions-list">
                        {options.map((item, inx) => {
                            return <ActionOption key={inx} item={item} toggler={toggleShowOpts} />;
                        })}

                        <NullableLoading condition={hasDelete}>
                            <DeleteAction text={deleteText} endpoint={deleteEndpoint} toggler={toggleShowOpts} />
                        </NullableLoading>
                    </div>
                </NullableLoading>
            </div>
        </NullableLoading>
    );
}
