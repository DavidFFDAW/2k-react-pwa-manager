import React, { useEffect } from 'react'

export default function useClickOutside(ref, callback) {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(_ => { 
        document.addEventListener('click', handleClick);

        return _ => document.removeEventListener('click', handleClick);
    }, [handleClick]);
    
}
