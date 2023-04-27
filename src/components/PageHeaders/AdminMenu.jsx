import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import HeaderLink from './MenuLink';

export function AdminMenuContent({ closeMenu }) {
    const { logOut } = useAuth();

    const handleLogOut = () => {
        closeMenu();
        logOut();
    };

    return (
        <>
            <ul className="list-menu">
                <li>
                    <span className='super-menu-item'>Público</span>
                    <ul className='submenu'>
                        <HeaderLink href={'/'} closeMenu={closeMenu}>Public Menú</HeaderLink>
                        <HeaderLink href={'/twitter'} closeMenu={closeMenu}>Twitter</HeaderLink>
                    </ul>
                </li>
                <li>
                    <span className='super-menu-item'>Administrador</span>
                    <ul className='submenu'>
                        <HeaderLink href={'/admin'} closeMenu={closeMenu}>Administrador</HeaderLink>
                        <HeaderLink href={'/admin/blog'} closeMenu={closeMenu}>Blog</HeaderLink>
                        <HeaderLink href={'/admin/wrestlers/all/page/1'} closeMenu={closeMenu}>Wrestlers</HeaderLink>
                        <HeaderLink href={'/admin/wrestlers/active/page/1'} closeMenu={closeMenu}>Active Wrestlers</HeaderLink>
                        <HeaderLink href={'/admin/twitter'} closeMenu={closeMenu}>Twitter Panel</HeaderLink>
                    </ul>
                </li>
                <li style={{ marginTop: 20 }} className='logout'>
                    <a onClick={handleLogOut} className="logout-link unlink">
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </>
    );
}
