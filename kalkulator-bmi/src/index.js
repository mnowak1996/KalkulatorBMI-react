import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/calculator';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=() =>{
    return (
        <Calculator/>
    );
}

ReactDOM.render(<App />,document.querySelector('.container'));