import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Table from './components/Table';

const initialState = {
    headers: ['name', 'last name', 'age'],
    data: [
        ['Thomas', 'Cruse', 25],
        ['Jack', 'Nick', 17],
        ['Anton', 'Shevchuk', 30],
        ['Max', 'Durov', 20]
    ]
};

ReactDOM.render(
        <Table data={initialState}/>,
    document.getElementById('root'));


