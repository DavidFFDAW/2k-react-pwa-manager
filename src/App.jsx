import { Suspense } from 'react';
import Spinner from './components/Spinner/Spinner';
import { UserProvider } from './contexts/user.context';
import { SnackbarProvider } from 'notistack';
import { Router } from './Router';
import './css/Globals.css';
import './css/MediaQueries.css';
import 'animate.css';
import 'material-symbols';

function App() {
    return (
        <>
            <SnackbarProvider
                autoHideDuration={4000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                className="notistack-notification-popup"
                maxSnack={3}
                dense={true}
            />
            <UserProvider>
                <Router />
            </UserProvider>
        </>
    );
}

export default App;
