import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../Icon/Icon';

export default function SidebarLink({ to, icon, text }) {
    return (
        <>
            <Link to={to} className="flex start gap-small al-center">
                <MaterialIcon icon={icon} />
                {text}
            </Link>
        </>
    );
}
