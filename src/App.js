import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks';

export default function App() {
    const { user } = useAuthListener();

    return (
        <>
            <Router>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route exact path={ROUTES.SIGN_IN}>
                    <Signin />
                </Route>

                <Route exact path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>

                <Route exact path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
            </Router>
        </>
    );
}
