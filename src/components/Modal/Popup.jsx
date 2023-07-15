import React from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';
import './popup.css';

export default function Popup({ show, title, children }) {
    const styles = {
        position: 'fixed',
        top: 10,
        left: 0,
        zIndex: 999,
    };

    return (
        <NullableLoading condition={show}>
            <div className="popup-container w1 flex center column animate__animated animate__fadeInDown" style={styles}>
                <h3 className="popup-title">{title}</h3>
            </div>
        </NullableLoading>
    );
}
