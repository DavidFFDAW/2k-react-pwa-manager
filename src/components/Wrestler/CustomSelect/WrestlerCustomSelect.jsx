import React from 'react'
import useCustomSelect from './useCustomSelect'
import WrestlerCustomSelectList from './WrestlerCustomSelectList';
import Spinner from '~/components/Spinner/Spinner';
import './customselect.css'

export default function WrestlerCustomSelect({ list, image_prop, name_prop }) {

    if (list.length === 0) return (<Spinner />)

    const { showList, search, searchResults, handleChangeSearch, handleSetShowList, handleSelect } = useCustomSelect(list, name_prop, image_prop);
    const List = Boolean(showList) ? <WrestlerCustomSelectList select={handleSelect} list={searchResults} image={image_prop} name={name_prop} /> : null;
    const taptap = !showList ? 'V listado' : 'X listado';


    return (
        <>
            <section className='custom-select-container'>

                <div className='custom-select flex start al-center'>
                    <input type="text" className='input' onChange={handleChangeSearch} value={search} />
                    <button type='button' className='btn-list' onClick={handleSetShowList}>{taptap}</button>
                    {List}
                </div>
            </section>
        </>
    )
}
