import React from 'react';
import './App.css';

const Big: React.FC<{props: any}> = ({ props }) => {
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
                <p>HEY, THIS IS GOING TO BE A BIG AWESOME CONTAINER!!!!</p>
                <p>Trying to get it all tested out now with funnctional components and typescript.</p>
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

export default Big;
