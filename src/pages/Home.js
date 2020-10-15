import React from 'react';
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { AccordionContainer } from "../containers/AccordionComponent";
import { HeaderContainer } from "../containers/HeaderComponent";
import { OptForm } from "../components";
import Feature from "../components/feature";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input type="text" placeholder="Email address" />
                        <OptForm.Button type="submit">Try it now</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    );
}
