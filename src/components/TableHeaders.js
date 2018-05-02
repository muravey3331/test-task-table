import React from 'react';

const TableHeaders = ({setSortParams, headers, sortedCol, sortType, widths}) => {
    return (
        <thead>
        <tr>
            <th>#</th>
            {headers.map((col, index) => (
                <th key={index}
                    onClick={() => setSortParams(index)}
                    width={widths ? `${widths[index]}%` : 'auto'}>
                    {col}
                    <div className={index === sortedCol ? `sort ${sortType}` : 'sort default'}/>
                </th>
            ))}
        </tr>
        </thead>
    )
};

export default TableHeaders;