import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AUTH_TOKEN_KEY } from 'lib/keys';
import { mainClient, authApi } from 'lib/api';
import { toast } from 'react-toastify';
import { inject } from 'mobx-react';

// pages
import Dashboard from './dashboard';
import Post from './posts';

class Admin extends Component {
    async componentDidMount() {
        const auth_message = 'Authentication key not found. Redirecting to login';
        try {
            // get token
            const token = localStorage.getItem(AUTH_TOKEN_KEY);
            if (!token) {
                toast.error(auth_message);
                throw Error(auth_message);
            }

            // add token to api instance
            mainClient.setAccessToken(token);

            // fetch profile
            const { data } = await authApi.userProfile();

            // set user data
            this.props.setProfile(data.user);
        } catch (e) {
            // If there's an auth error then redirect user back to login
            if (e.message === auth_message || (e.response && e.response.status === 401)) {
                return this.props.history.push('/login');
            } else {
                // TODO:: Redirect user to error page
                console.error(e); // eslint-disable-line
            }
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/posts" component={Post} />
                    <Route path="*" render={() => <p>404 page</p>} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ rootStore }) => {
    const { updateProfile } = rootStore.userStore;
    return {
        setProfile: updateProfile
    };
};
export default inject(mapStateToProps)(Admin);
