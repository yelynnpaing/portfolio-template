import React from 'react';
import {createRoot} from 'react-dom/client';
// import  ReactDOM  from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

/* 
    ReactDOM.render(
        <ThemeProvider>
            <App />
        </ThemeProvider>,
        document.getElementById('root')
    )
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
