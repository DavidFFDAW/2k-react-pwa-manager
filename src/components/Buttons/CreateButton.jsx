import { Link } from 'react-router-dom';

export default function CreateButton({ endpoint }) {
    return (
        <div className="create-new-button">
            <Link to={`/admin/${endpoint}`} className="unlink">
                &#43;
            </Link>
        </div>
    );
}
