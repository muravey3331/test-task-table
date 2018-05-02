import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Table from './components/Table';

const initialState = {
    headers: ['name', 'last name', 'age', 'city'],
    data: [
        ['Thomas', 'Cruse', 32, 'Moscow'],
        ['Jack', 'Nick', 17, 'Kyiv'],
        ['Anton', 'Shevchuk', 32, 'London'],
        ['Max', 'Durov', 23, 'New York'],
        ['Anton', 'Durov', 36, 'Paris'],
        ['Max', 'Logachov', 21, 'Moscow']
    ]
};
const widths = [25, 25, 20, 25];

ReactDOM.render(
    <Table data={initialState}
           widths={widths}/>,
    document.getElementById('root'));


