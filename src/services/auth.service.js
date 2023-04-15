import { AppConfig } from '~/AppConfig';

const userKey = AppConfig.USER_KEY;
const emptyUserInitialState = {};

export const getPersistedUserObject = () => {
    const user = localStorage.getItem(userKey);
    return user ? JSON.parse(user) : emptyUserInitialState;
};

export const persistUserObject = user => {
    const persistableUser = user;
    localStorage.setItem(userKey, JSON.stringify(persistableUser));
};

export const removePersistedUserObject = () => {
    localStorage.removeItem(userKey);
};

export const isUserPersisted = () => {
    const persistedUser = getPersistedUserObject();
    return Boolean(persistedUser.token);
};

export default {
    getPersistedUserObject,
    persistUserObject,
    removePersistedUserObject,
    isUserPersisted,
};
