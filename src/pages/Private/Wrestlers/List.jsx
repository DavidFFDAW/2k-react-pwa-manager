import { useParams } from 'react-router-dom';
import useWrestler from './hooks/useWrestler';
import { SimplePagination } from '~/components/Pagination/Pagination';
import Spinner from '~/components/Spinner/Spinner';
import WrestlerCard from '~/components/Wrestler/WrestlerCard';
import CreateButton from '~/components/Buttons/CreateButton';

export default function List({ endpoint }) {
    const { wrestlerList, wrestlerFilters, setShowFilters, changeNameFilters } = useWrestler(endpoint);
    const { page } = useParams();

    if (wrestlerList.loading) {
        return <Spinner />;
    }

    const wrestlersPerPage = 10;
    const currentPage = page || 1;

    const maxPages = Math.round(wrestlerList.list.length / wrestlersPerPage);
    const offset = (currentPage - 1) * wrestlersPerPage;
    const sliced = Boolean(wrestlerFilters.hasFilters)
        ? wrestlerList.list.slice(0, wrestlersPerPage + offset)
        : wrestlerList.list.slice(offset, wrestlersPerPage + offset);

    const filtersButtonText = Boolean(wrestlerFilters.show) ? 'Ocultar filtros' : 'Mostrar filtros';

    return (
        <>
            <div className="w1 flex between column al-center gap">
                <div className="w1 sticky sticky-filters">
                    <button className="w1 filters" onClick={setShowFilters}>
                        {filtersButtonText}
                    </button>
                    {wrestlerFilters.show && (
                        <div className="w1 filters-block">
                            <div className="w1 flex center al-center filters-block__content">
                                <div className="w90 flex column al-start gap-5 filters">
                                    <label className="label">Nombre</label>

                                    <div className="w1 flex start gap-smaller">
                                        <input
                                            className="w1"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={wrestlerFilters.name}
                                            onChange={ev => changeNameFilters(ev.target.value)}
                                        />
                                        <button className="unbutton" onClick={_ => changeNameFilters('')}>
                                            X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        {sliced.map(wrestler => (
                            <WrestlerCard key={wrestler.id} wrestler={wrestler} />
                        ))}
                    </div>
                </div>

                <CreateButton endpoint={'wrestlers/create/new'} />

                <div className="w1 pagination-block">
                    <SimplePagination page={page} maxPages={maxPages} currentPage={currentPage} baseUrl="/admin/wrestlers" goUp />
                </div>
            </div>
        </>
    );
}
