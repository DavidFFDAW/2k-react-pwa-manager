import React from 'react';

export default function Button({ text, type, className, onClick, disabled = false }) {
    const buttonType = type || 'button';
    const buttonClass = className ? `btn button ${className}` : 'btn button';

    return (
        <button disabled={disabled} className={buttonClass} role="button" type={buttonType} onClick={onClick}>
            {text}
        </button>
    );
}

export function ButtonCTA({ text, type, onClick, disabled = false }) {
    return <Button disabled={disabled} text={text} type={type} onClick={onClick} className={'cta'} />;
}

export function InfoButton({ text, type, onClick, disabled = false }) {
    return <Button disabled={disabled} text={text} type={type} onClick={onClick} className={'action-button info-action'} />;
}

export function DangerButton({ text, type, onClick, disabled = false }) {
    return <Button disabled={disabled} text={text} type={type} onClick={onClick} className={'action-button danger-action'} />;
}

export function GreyButton({ text, type, onClick, disabled = false }) {
    return <Button disabled={disabled} text={text} type={type} onClick={onClick} className={'action-button default-action'} />;
}