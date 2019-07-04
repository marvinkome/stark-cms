import React from 'react';
import Layout from 'components/layout';
import UserAvatar from './components/userAvatar';
import '../users.scss';

// import { italic } from 'ansi-colors';

export default class UserProfile extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <Layout>
                <div className="user--profile__container">
                    <h1 className="page__name">Profile</h1>
                    <form onSubmit={this.handleSubmit}>
                        <section>
                            <h3 className="section--title">Name:</h3>
                            <div className="usr--profile__form--container">
                                <div>
                                    <label className="profile__form--label" htmlFor="Fname">
                                        First Name:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Fname"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Lname">
                                        Last Name:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Lname"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Usrname">
                                        Username:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Usrname"
                                    />
                                    <small className="tooltip">Usernames cannot be changed</small>
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Nicname">
                                        Nickname:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Nicname"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="select">
                                        Display name publicly as:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="select"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="section--title">Contact Info:</h3>
                            <div className="usr--profile__form--container">
                                <div>
                                    <label className="profile__form--label" htmlFor="Email">
                                        Email<span className="important">(required)</span>:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Email"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Website">
                                        Website:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Website"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="twitter">
                                        Twitter username:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="twitter"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Fbook">
                                        Facebook profile url:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="text"
                                        id="Fbook"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="section--title">About Yourself:</h3>
                            <div className="usr--profile__form--container">
                                <div>
                                    <UserAvatar />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="bio">
                                        Short Bio Info:
                                    </label>
                                    <div className="form-group">
                                        <textarea
                                            className="profile__form--input --textarea"
                                            rows="5"
                                            id="bio"
                                        />
                                    </div>
                                    <small className="tooltip">
                                        Share a short biography information to fill out your profile
                                    </small>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="section--title">
                                Account Management / Personal Options:
                            </h3>
                            <h3>Change Password</h3>
                            <div className="usr--profile__form--container">
                                <div>
                                    <label className="profile__form--label" htmlFor="Oldpswd">
                                        Current Password:
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="password"
                                        id="Oldpswd"
                                    />
                                </div>

                                <div>
                                    <label className="profile__form--label" htmlFor="Newpswd">
                                        New Password
                                    </label>
                                    <input
                                        className="profile__form--input"
                                        type="password"
                                        id="Newpswd"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4>Toolbar</h4>
                            <div className="usr--profile__form--container">
                                <div>
                                    <input type="checkbox" id="toolbar" />
                                    <label className="toolbar--label" htmlFor="toolbar">Show Toolbar when viewing site</label>
                                </div>
                            </div>
                        </section>

                        <button className="btn primary--btn">Update Profile</button>
                    </form>
                </div>
            </Layout>
        );
    }
}
