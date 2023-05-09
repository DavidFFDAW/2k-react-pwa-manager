import { useEffect, useState } from 'react'
import useHttp from '~/hooks/useHttp';

export default function useCreateReign() {
    const endpoint = 'championships/reigns/create/datas';
    const http = useHttp();
    const [state, setFormState] = useState({
        name: '',
    });
    const [datas, setDatas] = useState({
        loading: true,
        championships: [],
        teams: [],
        wrestlers: [],
        selectedChampionship: {},
        selectedWrestler: {},
    });
    
    useEffect(_ => {
        http.APIGet(endpoint).then(res => {
            setDatas(previous => ({
                ...previous,
                loading: false,
                championships: res.championship,
                teams: res.teams,
                wrestlers: res.wrestlers,
            }));
        });
    }, []);

    const getChampionshipID = id => {
        setDatas(prv => ({
            ...prv,
            selectedChampionship: {
                ...datas.selectedChampionship,
                ...datas.championships.find(championship => championship.id === id)
            }
        }));
    }

    const getWrestlerID = id => {
        setDatas(prv => ({
            ...prv, 
            selectedWrestler: {
                ...datas.selectedWrestler,
                ...datas.wrestlers.find(wrestler => wrestler.id === id)
            }
        }));
    }

    const submitForm = ev => {
        ev.preventDefault();
        
        const payload = {
            isTagTeam: Boolean(datas.selectedChampionship.tag),
            championshipID: datas.selectedChampionship.id,
            wrestlerID: datas.selectedWrestler.id,
            teamID: datas.selectedWrestler.id,
            teamCreate: true,
        };
        console.log(payload);
        // http.APIPost(endpoint, payload).then(res => {
        //     console.log(res);
        // });
    }


    return {
        createDatas: datas,
        form: state,
        submitForm: submitForm,
        setFormState: setFormState,
        getWrestlerID: getWrestlerID,
        getChampionshipID: getChampionshipID,
    }
}
