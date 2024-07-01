import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyButton(){
    return(
        <>
        <button>I'm a button</button>
        <h1>Click on button</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <MyButton />
    </>
);
