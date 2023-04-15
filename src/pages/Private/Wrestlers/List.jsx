import useWrestler from './hooks/useWrestler';
import Spinner from '~/components/Spinner/Spinner';

export default function List() {
    const { wrestlerList } = useWrestler();

    if (wrestlerList.loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1>List</h1>

            <ul>
                {wrestlerList.list.slice(0, 10).map(wrestler => (
                    <li key={wrestler.id}>{wrestler.name}</li>
                ))}
            </ul>
        </div>
    );
}
