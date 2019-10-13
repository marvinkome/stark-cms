import React from 'react';
import { Provider } from 'mobx-react';
import { Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from 'lib/history';

// styles
import 'react-toastify/dist/ReactToastify.css';
import '../styles/App.scss';

// Routes
import Login from './login';
import Admin from './admin';
import MainSite from './site';

// global components
import Loader from '../components/loader';
import store from 'store';

export default class App extends React.Component {
    render() {
        return (
            <Provider rootStore={store}>
                <Router history={history}>
                    <div className="App">
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/" component={MainSite} />
                        </Switch>

                        <Loader />
                        <ToastContainer />
                    </div>
                </Router>
            </Provider>
        );
    }
}
