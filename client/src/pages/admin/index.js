import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { inject } from 'mobx-react';
import { AUTH_TOKEN_KEY } from 'lib/keys';
import { mainClient, authApi } from 'lib/api';
import { setupApollo } from 'lib/graphql';

import { routerPaths } from './routes';

class Admin extends Component {
    state = {
        client: null
    };

    async componentDidMount() {
        const auth_message = 'Authentication key not found. Redirecting to login';
        try {
            // get token
            const token = localStorage.getItem(AUTH_TOKEN_KEY);
            if (!token) {
                toast.error(auth_message);
                throw Error(auth_message);
            }

            // setup apollo client
            const { client } = setupApollo(token);
            this.setState({ client });

            // add token to api instance
            mainClient.setAccessToken(token);
            setupApollo(token);

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
        const { client } = this.state;

        return (
            client && (
                <div>
                    <ApolloProvider client={client}>
                        <Switch>
                            {routerPaths.map((routes, index) => (
                                <Route
                                    key={index}
                                    exact
                                    path={routes.path}
                                    component={routes.component}
                                />
                            ))}
                            <Route path="*" render={() => <p>404 page</p>} />
                        </Switch>
                    </ApolloProvider>
                </div>
            )
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
