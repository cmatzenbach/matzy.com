import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = { message: string };

const App = ({ message }: AppProps) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello, {message}!
                </p>
                <p>This is another sample sentence.</p>
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
    )
}
/* const App: React.FC<{ message: string }> = ({ message }) => (
 *     <div>{message}</div>
 * ); */

export default App;
