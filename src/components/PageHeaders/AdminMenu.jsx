import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';

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
                    <Link to={'/admin/blog'} className="unlink" onClick={closeMenu}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/wrestlers'} className="unlink" onClick={closeMenu}>
                        Wrestlers
                    </Link>
                </li>
                <li>
                    <a onClick={handleLogOut} className="unlink">
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </>
    );
}
