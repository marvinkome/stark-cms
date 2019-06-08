import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import LoginContainer from './components/Login/LoginContainer';
import DashBoard from './components/Dashboard/DashBoard';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginContainer} />
                    <Route path="/dashboard" component={DashBoard} />
                </Switch>
            </div>
        );
    }
}

export default App;
