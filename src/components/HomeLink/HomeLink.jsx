import { Link } from 'react-router-dom';

export default function HomeLink({ href, text }) {
    return (
        <div className="home-links">
            <Link to={href} className="block unlink">
                <span className="link">{text}</span>
            </Link>
        </div>
    );
}
