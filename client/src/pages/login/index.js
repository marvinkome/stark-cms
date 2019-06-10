import React from 'react';
import { inject } from 'mobx-react';
import logo from 'images/logo.svg';
import { authApi } from 'lib/api';
import { AUTH_TOKEN_KEY } from 'lib/keys';

import LoginForm from './components/loginForm';
import './login.scss';

class Login extends React.Component {
    loginUser = async (userData) => {
        const { data } = await authApi.login(userData);

        // set token on localstorage
        localStorage.setItem(AUTH_TOKEN_KEY, data.token);

        // add user profile to store
        this.props.setProfile(data.user);

        // redirect to dashboard
        this.props.history.push('/admin');
    };

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
                    <LoginForm login={this.loginUser} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ rootStore }) => {
    return {
        setProfile: rootStore.userStore.updateProfile
    };
};
export default inject(mapStateToProps)(Login);
