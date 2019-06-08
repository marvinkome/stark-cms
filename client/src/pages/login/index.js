import React from 'react';
import LoginForm from './components/loginForm';
import logo from '../../images/logo.svg';
import './login.scss';

export default class Login extends React.Component {
    render() {
        return (
            <div className="login__container">
                <div className="container">
                    {/* logo */}
                    <span className="login--logo">
                        <img src={logo} alt="Logo" />
                        <h3>Login to your account</h3>
                    </span>

                    {/* form */}
                    <LoginForm />
                </div>
            </div>
        );
    }
}
