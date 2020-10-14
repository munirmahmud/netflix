import React from "react";
import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from "../components";

export function AccordionContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently asked questions</Accordion.Title>
            {faqsData.map((faq) => (
                <Accordion.Item key={faq.id}>
                    <Accordion.Header>{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input type="text" placeholder="Email address" />
                <OptForm.Button type="submit">Try it now</OptForm.Button>
            </OptForm>
        </Accordion>
    );
}