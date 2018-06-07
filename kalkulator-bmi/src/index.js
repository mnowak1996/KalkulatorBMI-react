import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/calculator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=() =>{
    return (
        <Calculator/>
    );
}

ReactDOM.render(<App />,document.querySelector('.container'));