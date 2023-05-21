import React from 'react';
import { ButtonCTA, ButtonSecondary } from '~/components/Buttons/Buttons';
import { FlexBetween, FlexStart } from '~/components/Layouts/Flex';
import useWrestlerFilters from '../hooks/useFilters';
import { NullableLoading } from '~/components/Loading/LoadingComponent';
import { CheckboxInput, InputWithDeleteButton, UpsertSelect } from '~/components/Forms/FormInputs';

export default function WrestlerFilters({ wrestlerList, setWrestlerList }) {
    const { wrestlerFilters, setWrestlerFilters, setShowFilters, changeNameFilters, resetForm, submitFiltersForm } =
        useWrestlerFilters({
            wrestlersList: wrestlerList,
            stateSetter: setWrestlerList,
        });
    const filtersButtonText = Boolean(wrestlerFilters.show) ? 'Ocultar filtros' : 'Mostrar filtros';

    console.log({
        wrestlerList,
    });
    return (
        <>
            <button className="w90 filters" onClick={setShowFilters}>
                {filtersButtonText}
            </button>
            <NullableLoading condition={wrestlerFilters.show}>
                <form className="w90 filters-block padded" method="GET" onSubmit={submitFiltersForm}>
                    <div className="w1 flex center column gap-small al-center filters-block__content">
                        <div className="w1 flex column al-start gap-5 filters">
                            <InputWithDeleteButton
                                label={'Nombre'}
                                type="text"
                                property={'name'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                            />
                        </div>

                        <FlexStart>
                            <UpsertSelect
                                label={'Género'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'gender'}
                            >
                                <option value="">--</option>
                                <option value="M">Hombre</option>
                                <option value="F">Mujer</option>
                            </UpsertSelect>
                            <UpsertSelect
                                label={'Marca'}
                                formState={wrestlerFilters}
                                setFormState={setWrestlerFilters}
                                property={'brand'}
                            >
                                <option value=""></option>
                                <option value="RAW">RAW</option>
                                <option value="SD">SmackDown</option>
                                <option value="AWL">AWL</option>
                            </UpsertSelect>
                        </FlexStart>

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
