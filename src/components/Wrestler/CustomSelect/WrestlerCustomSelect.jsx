import React from 'react';
import useCustomSelect from './useCustomSelect';
import WrestlerCustomSelectList from './WrestlerCustomSelectList';
import Spinner from '~/components/Spinner/Spinner';
import './customselect.css';

export default function WrestlerCustomSelect({ list, imageProp, nameProp, getIdCallback }) {
    if (list.length === 0) return <Spinner />;

    const { showList, search, searchResults, handleChangeSearch, handleSetShowList, handleSelect } = useCustomSelect(list, nameProp, imageProp);

    const handleSelectCustom = getIdCallback
        ? item => {
              getIdCallback(item.id);
              handleSelect(item);
          }
        : handleSelect;

    const List = Boolean(showList) ? (
        <WrestlerCustomSelectList select={handleSelectCustom} list={searchResults} image={imageProp} name={nameProp} />
    ) : null;
    const taptap = !showList ? 'V listado' : 'X listado';

    return (
        <>
            <section className="custom-select-container">
                <div className="custom-select flex start al-center">
                    <input type="text" className="input" onChange={handleChangeSearch} value={search} />
                    <button type="button" className="btn-list" onClick={handleSetShowList}>
                        {taptap}
                    </button>
                    {List}
                </div>
            </section>
        </>
    );
}
