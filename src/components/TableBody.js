import React from 'react';


const TableBody = ({data}) => {
    return (
        <tbody>{
            data.map((row, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {row.map((col, index) => <td key={index}>{col}</td>)}
                    </tr>
                )
            )
        }
        </tbody>
    )
};

export default TableBody;