import React from 'react';
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { AccordionContainer } from "./containers/AccordionComponent";

export default function App() {
    return (
        <>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
