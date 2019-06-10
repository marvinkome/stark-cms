import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AUTH_TOKEN_KEY } from 'lib/keys';
import { mainClient, authApi } from 'lib/api';
import { toast } from 'react-toastify';
import { inject } from 'mobx-react';

class Admin extends Component {
    componentDidMount = async () => {
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
            await this.props.setProfile(data.user);
        } catch (e) {
            // If there's an auth error then redirect user back to login
            if (e.message === auth_message || (e.response && e.response.status === 401)) {
                return this.props.history.push('/login');
            } else {
                // TODO:: Redirect user to error page
                console.error(e); // eslint-disable-line
            }
        }
    };

    render() {
        const profile = this.props.profile;

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    Hello {profile ? profile.username : ''}, Welcome to your Dashboard
                </h1>

                <Switch>
                    <Route exact path="/admin" render={() => <p>dashboard page</p>} />
                    <Route exact path="/admin/posts" render={() => <p>posts page</p>} />
                    <Route path="*" render={() => <p>404 page</p>} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ rootStore }) => {
    const { updateProfile, profile } = rootStore.userStore;
    return {
        setProfile: updateProfile,
        profile
    };
};
export default inject(mapStateToProps)(Admin);
