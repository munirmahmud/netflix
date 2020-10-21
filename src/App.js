import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks';

export default function App() {
    const { user } = useAuthListener();

    return (
        <>
            <Router>
                <Switch>
                    <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} >
                        <Signin />
                    </IsUserRedirect>
                    <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} >
                        <Signup />
                    </IsUserRedirect>

                    <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                        <Home />
                    </IsUserRedirect>
                    <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
                        <Browse />
                    </ProtectedRoute>
                </Switch>
            </Router>
        </>
    );
}
