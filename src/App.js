import React from 'react';
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { AccordionContainer } from "./containers/AccordionComponent";
import { HeaderContainer } from "./containers/HeaderComponent";

export default function App() {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
