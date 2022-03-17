import React from 'react';

function PdfList({}){
    return(<div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((author,index)=>(
                    <tr key={
                        index
                    }>
                        <td>
                            {author.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
}
export default PdfList;