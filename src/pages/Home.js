import React from 'react';
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { AccordionContainer } from "../containers/AccordionComponent";
import { HeaderContainer } from "../containers/HeaderComponent";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <h1>This is Header</h1>
            </HeaderContainer>

            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    );
}
