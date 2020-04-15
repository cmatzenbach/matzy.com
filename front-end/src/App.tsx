import React from 'react';
import logo from './logo.svg';
import './App.css';

/* need to figure out how to route to other containers */
type AppProps = { message: string };

// alternate method, create typings for props on the fly; FC means Functional Component
/* const App: React.FC<{message: string}> = ({ message }) => { */
const App = ({ message }: AppProps) => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    hello, {message}!
                </p>
                <p>this is another sample sentence.</p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    learn react
                </a>
            </header>
        </div>
    )
}
/* const App: React.FC<{ message: string }> = ({ message }) => (
 *     <div>{message}</div>
 * ); */

export default App;
