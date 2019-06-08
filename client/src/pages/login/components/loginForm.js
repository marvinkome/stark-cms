import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="login--bg">
                <div className="form-bg" />

                <form className="login--form" onSubmit={this.handleSubmit}>
                    <label htmlFor="text" className="--label">
                        Username or Email Address
                    </label>
                    <input className="--input" type="text" id="text" required />

                    <label htmlFor="psword" className="--label">
                        Password
                    </label>
                    <input className="--input" type="password" id="psword" required />

                    <label className="checkbox--container">
                        <p className="checkbox--container--title">Remember me</p>
                        <input className="--checkbox" type="checkbox" />
                        <span className="custom--checkmark" />
                    </label>

                    <div style={{ marginTop: '5vh' }} className="center--wrapper">
                        <Link to="/dashboard">
                            <button
                                className="btn primary--btn"
                                type="submit"
                                style={{ marginBottom: '1rem' }}
                            >
                                Log In
                            </button>
                        </Link>
                        <p>Forgot Your password?</p>
                    </div>
                </form>
            </div>
        );
    }
}
