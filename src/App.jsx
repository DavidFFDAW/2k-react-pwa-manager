import { Suspense } from 'react';
import Spinner from './components/Spinner/Spinner';
import { UserProvider } from './contexts/user.context';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SnackbarProvider } from 'notistack';
import { Router } from './Router';
import './css/Globals.css';
import './css/MediaQueries.css';
import 'animate.css';

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
                <SnackbarProvider
                    autoHideDuration={4000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    className="notistack-notification-popup"
                    maxSnack={3}
                    dense={true}
                />
                <UserProvider>
                    <Router />
                </UserProvider>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
