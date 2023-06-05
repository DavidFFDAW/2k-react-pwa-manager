import React from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';

export default function Dialog({ visible, toggleVisibility, children }) {
    return (
        <>
            <NullableLoading condition={visible}>
                <div className="background-action-block"></div>
                <dialog open={visible} className="dialog-modal">
                    <header className="dialog-header">
                        <button className="dialog-close-button" type="button" onClick={toggleVisibility}>
                            &times;
                        </button>
                    </header>
                    <section className="dialog-content">{children}</section>

                    {/* <footer className="flex end dialog-footer">
                        <ButtonSecondary text={'Cerrar'} onClick={toggleVisibility} />
                    </footer> */}
                </dialog>
            </NullableLoading>
        </>
    );
}
