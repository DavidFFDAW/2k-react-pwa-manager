import React, { useState } from 'react';
import './sidebar.css';
import { HeaderMenu } from '~/constants/Menus';
import Image from '../Image/Image';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
    const [activeLink, setActive] = useState('');
    const toggleSidebar = event => {
        event.target.parentElement.classList.toggle('shown');
    };

    return (
        <aside className="sidebar" id="sidebear">
            <button type="button" role="button" className="btn close responsive" onClick={toggleSidebar}></button>

            <div className="flex center sidebar-image-container">
                <Image src={'/icons/icon-128x128.png'} width={128} height={128} className="sidebar-image-logo" />
            </div>

            <div className="flex center">
                <div className="sidebar-links-container links">
                    {HeaderMenu.admin.map(item => {
                        return (
                            <SidebarLink
                                id={item.key}
                                active={activeLink}
                                setActive={setActive}
                                icon={item.material}
                                to={item.url}
                                key={item.key}
                                text={item.name}
                            />
                        );
                    })}
                </div>
            </div>

            <button className="btn-sidebar responsive btn-open-sidebar" onClick={toggleSidebar}>
                Sidebar
            </button>
        </aside>
    );
}
