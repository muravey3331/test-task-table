import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Table from './components/Table';

const initialState = {
    headers: ['name', 'last name', 'age', 'city'],
    data: [
        ['Thomas', 'Cruse', 25, 'London'],
        ['Jack', 'Nick', 17, 'New York'],
        ['Anton', 'Shevchuk', 30, 'Moscow'],
        ['Max', 'Durov', 20, 'Kyiv']
    ]
};

ReactDOM.render(
        <Table data={initialState}/>,
    document.getElementById('root'));


