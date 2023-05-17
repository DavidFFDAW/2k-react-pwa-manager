import { useCallback } from 'react';
import { AppConfig } from '../AppConfig';
import { persistUserObject } from '../services/auth.service';
import { useUserStorage } from '../contexts/user.context';
import { enqueueSnackbar } from 'notistack';
import { PublicRoutes } from '~/constants/routes';
import { useNavigate } from 'react-router-dom';
import http from '../services/http.service';

export function useAuth() {
    const navigate = useNavigate();
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

    const changeColorThemeProp = useCallback(colorTheme => { 
        setStoredUser(user => ({ ...user, theme: colorTheme }));
        persistUserObject({ ...storedUser, theme: colorTheme });
    });

    const logOut = useCallback(() => {
        tryPersistUser({});
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
    }, [navigate]);

    return {
        colorTheme: storedUser.theme,
        tryLogInUser,
        storedUser,
        setStoredUser,
        changeColorThemeProp,
        logOut,
    };
}
