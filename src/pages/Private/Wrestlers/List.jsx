import { useParams } from 'react-router-dom';
import useWrestler from './hooks/useWrestler';
import { SimplePagination } from '~/components/Pagination/Pagination';
import WrestlerCard from '~/pages/Private/Wrestlers/components/WrestlerCard';
import CreateButton from '~/components/Buttons/CreateButton';
import { ConditionalLoading, NullableLoading } from '~/components/Loading/LoadingComponent';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import WrestlerFilters from './components/WrestlerFilters';
import Title from '~/components/Title/Title';

export default function List({ endpoint }) {
    const { wrestlerList, setWrestlerList, hire, release } = useWrestler(endpoint);
    const { page } = useParams();

    const wrestlersPerPage = wrestlerList.wrestlersByPage;
    const currentPage = page || 1;

    const maxPages = Math.round(wrestlerList.list.length / wrestlersPerPage);
    const offset = (currentPage - 1) * wrestlersPerPage;
    // const sliced = Boolean(wrestlerList.hasFilters)
    //     ? wrestlerList.list.slice(0, wrestlersPerPage + offset)
    //     : wrestlerList.list.slice(offset, wrestlersPerPage + offset);
    const sliced = wrestlerList.list.slice(offset, wrestlersPerPage + offset);

    const list = wrestlerList.pagination ? sliced : wrestlerList.list;

    return (
        <>
            <Title title={'Wrestlers'}>
                <div className="w1 sticky sticky-filters">
                    <WrestlerFilters wrestlerList={wrestlerList} setWrestlerList={setWrestlerList} />
                </div>
            </Title>

            <div className="w1 flex between column al-center gap">
                <NullableLoading condition={wrestlerList.pagination}>
                    <div className="w1 pagination-block">
                        <SimplePagination
                            page={page}
                            maxPages={maxPages}
                            currentPage={currentPage}
                            baseUrl={`/admin/wrestlers`}
                        />
                    </div>
                </NullableLoading>

                <ConditionalLoading condition={!wrestlerList.loading} fallback={<ComponentSpinner />}>
                    <div className="w1 list-block overflow-y">
                        <div className="wrestlers-list items-listing">
                            <NullableLoading condition={wrestlerList.hasFilters && list.length <= 0}>
                                No se han encontrado resultados con estos criterios de busqueda
                            </NullableLoading>

                            <NullableLoading condition={list.length > 0}>
                                {list.map(wrestler => (
                                    <WrestlerCard key={wrestler.id} wrestler={wrestler} hire={hire} release={release} />
                                ))}
                            </NullableLoading>
                        </div>
                    </div>
                </ConditionalLoading>

                <CreateButton endpoint={'wrestlers/create/new'} />

                <NullableLoading condition={wrestlerList.pagination}>
                    <div className="w1 pagination-block">
                        <SimplePagination
                            page={page}
                            maxPages={maxPages}
                            currentPage={currentPage}
                            baseUrl={`/admin/wrestlers`}
                            goUp
                        />
                    </div>
                </NullableLoading>
            </div>
        </>
    );
}
