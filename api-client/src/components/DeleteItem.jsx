import React, { useState } from 'react';
import { deleteItem } from '../services/ApiService.jsx';

const DeleteItem = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteItem(id);
            setMessage('Item deleted successfully');
        } catch (error) {
            setMessage('Error deleting item');
        }
    };

    return (
        <div className="crud-container">
            <h2>Delete Item</h2>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <button type="submit">Delete</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteItem;