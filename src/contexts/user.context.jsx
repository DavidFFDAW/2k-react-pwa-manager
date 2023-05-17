import React, { useState } from 'react';
import { getPersistedUserObject } from '../services/auth.service';

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const [storedUser, setStoredUser] = useState(() => ({
        ...getPersistedUserObject()
    }));

    return <UserContext.Provider value={{ storedUser, setStoredUser }}>{children}</UserContext.Provider>;
};

export const useUserStorage = _ => React.useContext(UserContext);
export default UserContext;
