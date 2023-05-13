import { useEffect, useState } from 'react';
import useHttp from '~/hooks/useHttp';

export const ITEMS = {
    CHAMPIONSHIP: 'championship',
    WRESTLER: 'wrestler',
    TEAM: 'team',
};

export default function useCreateReign() {
    const endpoint = 'championships/reigns/create/datas';
    const http = useHttp();
    const [state, setFormState] = useState({
        name: '',
        isCreateTagTeam: false,
        createTeam: {
            name: '',
            members: [],
            overall: 0,
        },
        start: new Date().toISOString().split('T')[0],
        isCurrent: true,
        end: '',
        today: new Date().toISOString().split('T')[0],
    });
    const [datas, setDatas] = useState({
        loading: true,
        championships: [],
        teams: [],
        originalWrestlers: [],
        wrestlers: [],
        selectedChampionship: {},
        selectedWrestler: {},
        selectedTeam: {},
    });

    useEffect(_ => {
        http.APIGet(endpoint).then(res => {
            setDatas(previous => ({
                ...previous,
                loading: false,
                championships: res.championship,
                teams: res.teams,
                wrestlers: res.wrestlers,
                originalWrestlers: res.wrestlers,
            }));
        });
    }, []);

    const getItemID = (id, type) => {
        const typeCaps = type.charAt(0).toUpperCase() + type.slice(1);
        const key = `selected${typeCaps}`;

        const isChampionship = type === ITEMS.CHAMPIONSHIP;
        const chp = isChampionship ? datas.championships.find(item => item.id === id) : {};
        const wrestlersGender = isChampionship
            ? datas.originalWrestlers.filter(wr => {
                  console.log({ wr, chp });
                  return wr.sex === chp.gender;
              })
            : datas.originalWrestlers;

        setDatas(prev => ({
            ...prev,
            wrestlers: wrestlersGender,
            [key]: {
                ...datas[key],
                ...datas[`${type}s`].find(item => item.id === id),
            },
        }));
    };

    const submitForm = ev => {
        ev.preventDefault();

        const payload = {
            isTagTeam: Boolean(datas.selectedChampionship.tag),
            championshipID: datas.selectedChampionship.id,
            wrestlerID: datas.selectedWrestler.id,
            teamID: datas.selectedWrestler.id,
            teamCreate: {
                ...state,
            },
        };
        console.log(payload);
        // http.APIPost(endpoint, payload).then(res => {
        //     console.log(res);
        // });
    };

    return {
        createDatas: datas,
        form: state,
        submitForm: submitForm,
        setFormState: setFormState,
        getItemID: getItemID,
    };
}
