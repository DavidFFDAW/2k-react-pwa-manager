import React from 'react';
import { BlackButton, ButtonCTA, ButtonSecondary } from '~/components/Buttons/Buttons';
import { FlexBetween, FlexCenter, FlexStart } from '~/components/Layouts/Flex';
import useWrestlerFilters from '../hooks/useFilters';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import { CheckboxInput, InputWithDeleteButton, UpsertSelect } from '~/components/Forms/FormInputs';
import { ArrowDown, ArrowUp, FilterIcon } from '~/components/Icons/CommonIcons';
import { navigateBottomPage, navigateTopPage } from '~/services/navigation.service';

export default function WrestlerFilters({ wrestlerList, setWrestlerList }) {
    const { wrestlerFilters, setWrestlerFilters, setShowFilters, changeNameFilters, resetForm, submitFiltersForm } =
        useWrestlerFilters({
            wrestlersList: wrestlerList,
            stateSetter: setWrestlerList,
        });

    return (
        <>
            <NullableLoading condition={!wrestlerFilters.show}>
                <div className="w90 flex end gap-smaller">
                    <button className="filters" onClick={navigateBottomPage}>
                        <ArrowDown w={20} h={25} />
                    </button>
                    <button className="filters" onClick={navigateTopPage}>
                        <ArrowUp w={20} h={25} />
                    </button>
                    <button className="filters" onClick={setShowFilters}>
                        <FilterIcon w={20} h={25} />
                    </button>
                </div>
            </NullableLoading>
            <NullableLoading condition={wrestlerFilters.show}>
                <form
                    className="animate__animated animate__fadeIn w90 filters-block padded"
                    method="GET"
                    onSubmit={submitFiltersForm}
                >
                    <header className="box filter-header buttons">
                        <BlackButton text={<>&times;</>} onClick={_ => setShowFilters(false)} />
                    </header>

                    <div className="w1 flex center column gap-small padded al-center filters-block__content">
                        <div className="w1 flex column al-snBlackButtonart gap-5 filters">
                            <InputWithDeleteButton
                                label={'Nombre'}
                                type="text"
                                property={'name'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                            />
                        </div>

                        <FlexStart align={'center'}>
                            <UpsertSelect
                                label={'Género'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'gender'}
                            >
                                <option value="">Todos</option>
                                <option value="M">Hombre</option>
                                <option value="F">Mujer</option>
                            </UpsertSelect>

                            <UpsertSelect
                                label={'Marca'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'brand'}
                            >
                                <option value="">Todas</option>
                                <option value="RAW">RAW</option>
                                <option value="SD">SmackDown</option>
                                <option value="AWL">AWL</option>
                            </UpsertSelect>
                        </FlexStart>

                        <FlexCenter align={'center'}>
                            <UpsertSelect
                                label={'Resultados'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'results_per_page'}
                            >
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </UpsertSelect>
                            <UpsertSelect
                                label={'Status'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'status'}
                            >
                                <option value="active">En activo</option>
                                <option value="manager">Manager</option>
                                <option value="released">Despedidos</option>
                                <option value="semi-active">Semi en activo</option>
                                <option value="retired">Retirado</option>
                            </UpsertSelect>
                        </FlexCenter>

                        <CheckboxInput
                            label={'Mostrar los resultados con paginación'}
                            property={'pagination'}
                            formState={wrestlerFilters}
                            setFormState={setWrestlerFilters}
                        />
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
