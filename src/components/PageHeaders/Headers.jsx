import React from 'react';
import { AdminMenuContent } from './AdminMenu';

export function AdminHeaders() {
    const [showMenu, setShowMenu] = React.useState(false);
    const menuClass = showMenu ? 'unbutton menu active' : 'unbutton menu';

    const setMenu = () => {
        setShowMenu(previous => !previous);
    };

    return (
        <>
            <header className="">
                <div className="admin-header flex between al-center gap">
                    <h4 className="admin-header-title">Admin</h4>
                    <button className={menuClass} onClick={setMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                {showMenu && (
                    <div className="menu-content flex end al-center gap-smaller">
                        <AdminMenuContent />
                    </div>
                )}
            </header>
        </>
    );
}
