import React, { Component } from 'react';

export default class LoginForm extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();

        // get inputs value
        let identifier = e.target['identifier'].value;
        let password = e.target['password'].value;

        await this.props.login({ identifier, password });
        identifier = password = '';
    };

    render() {
        return (
            <div className="login--bg">
                <h2>Login</h2>

                <form className="login--form" onSubmit={this.handleSubmit}>
                    <label htmlFor="identity" className="--label">
                        Username or Email Address
                    </label>
                    <input className="--input" type="text" id="identifier" required />

                    <label htmlFor="password" className="--label">
                        Password
                    </label>
                    <input className="--input" type="password" id="password" required />

                    {/* <label className="checkbox-container">
                        <p className="checkbox-title">Remember me</p>
                        <input className="checkbox" type="checkbox" />
                        <span className="checkmark" />
                    </label> */}

                    <div className="center--wrapper">
                        <button type="submit">
                            Log In
                        </button>

                        {/* TODO:: Add forget password functionality */}
                        {/* <p>Forgot Your password?</p> */}
                    </div>
                </form>
            </div>
        );
    }
}
