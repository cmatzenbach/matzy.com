import React from 'react';
import './App.css';

const Home: React.FC<{props: any}> = ({ props }) => {
    return (
        <div className="app">

            <style>{`
            .black {
                font-color: #ffffff;
                font-style: italic;
            }
            .black {
                font-weight: #000000;
                font-style: italic;
            }
                `}
            </style>
            <header className="app-header">
                <p>
                    hello, {props}!
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
                <div className="black">
                </div>
                <div className="white">
                </div>
            </header>
        </div>
    );
}

export default Home;
