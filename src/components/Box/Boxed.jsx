import React from 'react'


export function Boxed({ title, children }) {
    return (
        <div className="w90 boxed space-down">
            <h2 className="space-down">{title}</h2>
            {children}
        </div>
    )
}

