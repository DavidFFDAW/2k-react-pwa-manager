import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';

export function AdminMenuContent() {
    const { logOut } = useAuth();

    return (
        <>
            <ul className="list-menu">
                <li>
                    <Link to={'/admin/blog'} className="unlink">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/wrestlers'} className="unlink">
                        Wrestlers
                    </Link>
                </li>
                <li>
                    <a onClick={logOut} className="unlink">
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </>
    );
}
