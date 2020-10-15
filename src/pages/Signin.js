import React, {useContext, useState} from "react";
import { useHistory } from 'react-router-dom';
import { FooterContainer } from "../containers/FooterContainer";
import { HeaderContainer } from "../containers/HeaderComponent";
import Form from "../components/form";
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from "../context/firebaseContext";

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = emailAddress === '' || password === '';

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input type="email" placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress( target.value )} />
                        <Form.Input type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword( target.value )} autocomplete="off" />
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