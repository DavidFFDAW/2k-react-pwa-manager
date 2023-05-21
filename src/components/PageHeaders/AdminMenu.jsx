import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import HeaderLink from './MenuLink';
import { UpsertToggle } from '../Forms/FormInputs';
import { useEffect, useState } from 'react';

const themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

export function AdminMenuContent({ closeMenu }) {
    const { logOut } = useAuth();
    const { changeColorThemeProp, colorTheme } = useAuth();
    const [toggleState, setToggleState] = useState(false);

    const handleLogOut = () => {
        closeMenu();
        logOut();
    };

    useEffect(() => {
        setToggleState(colorTheme === themes.DARK);
    }, [colorTheme]);

    const handleColorThemeSwitch = () => {
        const body = document.body;
        const theme = body.classList.contains(themes.LIGHT) ? themes.DARK : themes.LIGHT;
        body.classList.toggle(themes.DARK);
        changeColorThemeProp(theme);
        closeMenu();
    };

    return (
        <>
            <ul className="list-menu">
                <li>
                    <span className="super-menu-item">Público</span>
                    <ul className="submenu">
                        <HeaderLink href={'/'} closeMenu={closeMenu}>
                            Public Menú
                        </HeaderLink>
                        <HeaderLink href={'/twitter'} closeMenu={closeMenu}>
                            Twitter
                        </HeaderLink>
                    </ul>
                </li>
                <li>
                    <span className="super-menu-item">Administrador</span>
                    <ul className="submenu">
                        <HeaderLink href={'/admin'} closeMenu={closeMenu}>
                            Administrador
                        </HeaderLink>
                        <HeaderLink href={'/admin/blog'} closeMenu={closeMenu}>
                            Blog
                        </HeaderLink>
                        <HeaderLink href={'/admin/wrestlers/all/page/1'} closeMenu={closeMenu}>
                            Wrestlers
                        </HeaderLink>
                        <HeaderLink href={'/admin/wrestlers/active/page/1'} closeMenu={closeMenu}>
                            Active Wrestlers
                        </HeaderLink>
                        <HeaderLink href={'/admin/twitter'} closeMenu={closeMenu}>
                            Twitter Panel
                        </HeaderLink>
                    </ul>
                </li>
                <li style={{ marginTop: 20 }} className="logout">
                    <a onClick={handleLogOut} className="logout-link unlink">
                        Cerrar sesión
                    </a>
                </li>
                <li style={{ marginTop: 20 }} className="logout">
                    <div className="flex end al-start gap">
                        <p>Claro</p>
                        <div>
                            <UpsertToggle label={''} toggleCallback={handleColorThemeSwitch} checked={toggleState} />
                        </div>
                        <p>Oscuro</p>
                    </div>
                </li>
            </ul>
        </>
    );
}
