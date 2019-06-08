import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.scss';

// Routes
import Login from './login';
import DashBoard from './dashboard';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/dashboard" component={DashBoard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
