import React from 'react';
import { ButtonCTA, ButtonSecondary, GreyButton } from '~/components/Buttons/Buttons';
import { FlexBetween, FlexStart } from '~/components/Layouts/Flex';
import useWrestlerFilters from '../hooks/useFilters';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

export default function WrestlerFilters({ wrestlerList, setWrestlerList }) {
    const { wrestlerFilters, setShowFilters, changeNameFilters, resetForm, submitFiltersForm } = useWrestlerFilters({
        wrestlersList: wrestlerList,
        stateSetter: setWrestlerList,
    });
    const filtersButtonText = Boolean(wrestlerFilters.show) ? 'Ocultar filtros' : 'Mostrar filtros';

    return (
        <>
            <button className="w90 filters" onClick={setShowFilters}>
                {filtersButtonText}
            </button>
            <NullableLoading condition={wrestlerFilters.show}>
                <form className="w90 filters-block padded" method="GET" onSubmit={submitFiltersForm}>
                    <div className="w1 flex center column gap-small al-center filters-block__content">
                        <div className="w1 flex column al-start gap-5 filters">
                            <label className="label">Nombre</label>

                            <FlexStart align={'center'} gap="smaller">
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
                            </FlexStart>
                        </div>
                        <FlexBetween align={'center'}>
                            <ButtonSecondary type={'reset'} text={'Borrar'} onClick={resetForm} />
                            <ButtonCTA type={'submit'} text={'Buscar'} />
                        </FlexBetween>
                    </div>
                </form>
            </NullableLoading>
        </>
    );
}
