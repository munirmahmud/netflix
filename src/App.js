import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { AccordionContainer } from "./containers/AccordionComponent";
import { HeaderContainer } from "./containers/HeaderComponent";
import * as ROUTES from './constants/routes';

export default function App() {
    return (
        <>
            <Router>
                <Route exact path={ROUTES.HOME}>
                    <HeaderContainer>
                        <h1>This is Header</h1>
                    </HeaderContainer>

                    <JumbotronContainer />
                    <AccordionContainer />
                    <FooterContainer />
                </Route>
            </Router>
        </>
    )
}
