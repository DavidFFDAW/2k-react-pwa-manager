import { Link } from 'react-router-dom';

export function AdminMenuContent() {
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
            </ul>
        </>
    );
}
