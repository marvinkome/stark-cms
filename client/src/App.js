import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        text: ''
    };

    componentDidMount = async () => {
        const body = await (await fetch('/api/')).json();
        this.setState({
            text: body.message
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>{this.state.text}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
