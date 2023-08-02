import React from 'react';
import './sidebar.css';
import { HeaderMenu } from '~/constants/Menus';
import HeaderLink from '../PageHeaders/MenuLink';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const toggleSidebar = event => {
        event.target.parentElement.classList.toggle('shown');
    };

    return (
        <aside className="flex center al-center column sidebar gap-small" id="sidebear">
            <button type="button" role="button" className="btn close responsive" onClick={toggleSidebar}></button>

            <div className="links">
                {HeaderMenu.public.map((item, indx) => {
                    return (
                        <Link to={item.url} className="block" key={indx}>
                            {item.name}
                        </Link>
                    );
                })}
                {HeaderMenu.admin.map((item, indx) => {
                    return (
                        <Link to={item.url} className="block" key={indx}>
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <button className="btn-sidebar responsive btn-open-sidebar" onClick={toggleSidebar}>
                Sidebar
            </button>
        </aside>
    );
}
