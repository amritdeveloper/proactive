import React, {useState} from 'react';
import './AddAndDelete.css'; // Import CSS file for styling


function AddDeleteDataTab() {
    const [rows, setRows] = useState([{ id: 1, name: '' }]);

    const handleAddRow = () => {
        const newRowId = rows.length + 1;
        setRows([...rows, { id: newRowId, name: '' }]);
    };

    const handleRemoveRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        setRows(rows.map(row => (row.id === id ? { ...row, [name]: value } : row)));
    };

    return (
        <div>
            <h2>Add/Delete Data Tab</h2>
            <button onClick={handleAddRow}>Add Row</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={row.name}
                                    onChange={(e) => handleChange(row.id, e)}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleRemoveRow(row.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddDeleteDataTab;
