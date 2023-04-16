import { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { UserProvider } from './contexts/user.context';
import { SnackbarProvider } from 'notistack';
import { Router } from './Router';
import './css/Globals.css';
import './css/MediaQueries.css';

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
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
