import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../Icon/Icon';

function SidebarLinkSubmenu({ icon, submenu, text }) {
    const [active, setActive] = useState(false);
    const activeClass = active ? 'active' : 'non-active';

    return (
        <>
            <div
                className="sidebar-link relative flex start al-center gap-small link-with-submenu"
                onClick={_ => setActive(p => !p)}
            >
                <MaterialIcon icon={icon} />
                {text}

                <div className={`sidebar-link-submenu-container ${activeClass}`}>
                    <div className="sidebar-links-container links">
                        {submenu.map((item, index) => {
                            return <SidebarLink to={item.url} text={item.name} icon={item.material} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function SidebarLink({ to, icon, text, submenu }) {
    // if (submenu && submenu.length > 0) return <SidebarLinkSubmenu icon={icon} text={text} submenu={submenu} />;
    const clickHandler = ev => {
        ev.target.classList.toggle('active');
    };

    return (
        <>
            <Link to={to} className="sidebar-link flex start gap-small al-center" onClick={clickHandler}>
                <MaterialIcon icon={icon} />
                {text}
            </Link>
        </>
    );
}
