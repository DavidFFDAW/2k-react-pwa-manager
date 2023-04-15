import { useCallback } from 'react';
import { AppConfig } from '../AppConfig';
import { persistUserObject } from '../services/auth.service';
import { useUserStorage } from '../contexts/user.context';
import http from '../services/http.service';
import { enqueueSnackbar } from 'notistack';

export function useAuth() {
    const { storedUser, setStoredUser } = useUserStorage();

    const tryPersistUser = user => {
        persistUserObject(user);
        setStoredUser(user);
    };

    const tryLogInUser = useCallback(user => {
        return http.post(AppConfig.API_BASE_URL + 'auth/login', user).then(globalResponse => {
            if (globalResponse.ok) {
                tryPersistUser(globalResponse.content);
            }
            if (!globalResponse.ok) {
                const message = globalResponse.content.message || 'Incorrect credentials';
                enqueueSnackbar(message, { variant: 'error' });

                // break the promise chain
                throw new Error(message);
            }

            return globalResponse;
        });
    }, []);

    return {
        tryLogInUser,
        storedUser,
        setStoredUser,
    };
}
