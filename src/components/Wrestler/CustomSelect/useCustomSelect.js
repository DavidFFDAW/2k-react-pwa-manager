import { useState } from "react"

export default function useCustomSelect(list, nameProp, imageProp) {
    const state = {
        id: '',
        search: '',
        searchResults: list,
        showList: false,
    };
    const [selectState, setSelectState] = useState(state);


    const handleChangeSearch = (e) => {
        const inputVal = e.target.value;
        const filteredList = list.filter(item => item[nameProp].toLowerCase().includes(inputVal.toLowerCase()));
        const callback = previous => ({ ...previous, search: inputVal, searchResults: filteredList, showList: true });
        setSelectState(callback);
    };

    const handleSelect = (item) => {
        const name = item[nameProp] || item.name || '';
        console.log({name});
        const callback = previous => ({ ...previous, id: item.id, search: name, showList: false });
        setSelectState(callback);
    };

    const handleSetShowList = (_) => { 
        const callback = previous => ({ ...previous, showList: !previous.showList });
        setSelectState(callback);
    };


    return {
        showList: selectState.showList,
        search: selectState.search,
        searchResults: selectState.searchResults,
        handleChangeSearch,
        handleSetShowList,
        handleSelect,
    }
}
