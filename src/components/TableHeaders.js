import React from 'react';

const TableHeaders = ({setSortParams, headers, sortedCol, sortType}) => {
    return (
        <thead>
        <tr>
            <th>#</th>
            {headers.map((col, index) => (
                <th key={index} onClick={() => setSortParams(index)}>
                    {col}
                    <div className={index === sortedCol ? `sort ${sortType}` : 'sort default'}/>
                </th>
            ))}
        </tr>
        </thead>
    )
};

export default TableHeaders;