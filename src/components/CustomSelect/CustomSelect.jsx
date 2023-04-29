import useCustomSelect from './useCustomSelect';
import WrestlerCustomSelectList from './CustomSelectList';
import './customselect.css';

export default function WrestlerCustomSelect({ list, imageProp, nameProp, getIdCallback, value }) {
    const { showList, search, searchResults, handleChangeSearch, handleSetShowList, handleSelect, setListVisible } =
        useCustomSelect(list, nameProp, imageProp, value);

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
                    <input
                        type="text"
                        className="input"
                        onChange={handleChangeSearch}
                        value={search}
                        onFocus={setListVisible}
                    />
                    <button type="button" className="btn-list" onClick={handleSetShowList}>
                        {taptap}
                    </button>
                    {List}
                </div>
            </section>
        </>
    );
}
