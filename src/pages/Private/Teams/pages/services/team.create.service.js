export const initialTeamState = {
    name: '',
    overall: '',
    members: [],
    wrestlers: [],
    brand: 1,
};

export const setTeamWrestlersCallback = setTeamData => {
    return data => {
        setTeamData(pr => ({
            ...pr,
            wrestlers: data,
        }));
    };
};

export const getPayload = datas => {
    return {};
};
