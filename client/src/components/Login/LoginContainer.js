import React, { Component } from 'react';
import logo from '../../Logo.svg';
import Container from '../modules/container';
import LoginForm from './LoginForm';

export default class LoginContainer extends Component {
    render() {
        return (
            <div className="login__container">
                <Container>
                    <span
                        style={{
                            marginBottom: '5vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <img src={logo} alt="Logo" />
                        <h3>Login your account to continue</h3>
                    </span>
                    <LoginForm />
                </Container>
            </div>
        );
    }
}
