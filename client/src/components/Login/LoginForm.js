import React, { Component } from 'react';
import formBCG from '../../images/form_bg_vector.svg';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="login--bg">
                <div style={formBG} />
                <form className="login--form" onSubmit={this.handleSubmit}>
                    <label htmlFor="text" className="--label">
                        Username or Email Address
                    </label>
                    <input className="--input" type="text" id="text" required autoComplete />

                    <label htmlFor="psword" className="--label">
                        Password
                    </label>
                    <input className="--input" type="password" id="psword" required />

                    <label className="checkbox--container">
                        <p
                            style={{
                                fontSize: '0.7em',
                                position: 'relative',
                                bottom: '5px',
                                color: '#706E6E'
                            }}
                        >
                            Remember me
                        </p>
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

const formBG = {
    width: '100%',
    height: '500px',
    backgroundImage: `url(${formBCG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '20vh',
    left: '0',
    opacity: '.4',
    zIndex: '-2'
};
