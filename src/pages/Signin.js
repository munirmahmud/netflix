import React, {useState} from "react";
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderComponent";
import Form from "../components/form";
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = emailAddress === '' || password === '';

    const handleSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input type="email" placeholder="Email address"  />
                        <Form.Input type="password" placeholder="Password"  />
                        <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>
                    </Form.Base>

                    <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link></Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. </Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    );
}