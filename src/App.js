import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, Signin, Signup } from "./pages";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
    const user = {};

    return (
        <>
            <Router>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact >
                    <Signin />
                </IsUserRedirect>

                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact >
                    <Signup />
                </IsUserRedirect>

                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route exact path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
            </Router>
        </>
    );
}
