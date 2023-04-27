import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLink({ href, closeMenu, children }) {
    return (
        <li>
            <Link to={href} className="unlink" onClick={closeMenu}>
                {children}
            </Link>
        </li>
    )
}
