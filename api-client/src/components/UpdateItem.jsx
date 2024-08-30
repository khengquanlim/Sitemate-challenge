import React, { useState } from 'react';
import { updateItem, getItemById } from '../services/ApiService.jsx';

const UpdateItem = () => {
    const [id, setId] = useState('');
    const [item, setItem] = useState({ name: '', description: '' });
    const [message, setMessage] = useState('');

    const fetchItem = async (id) => {
        try {
            const data = await getItemById(id);
            setItem(data);
        } catch (error) {
            setMessage('Error fetching item');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateItem(id, item);
            setMessage('Item updated successfully');
        } catch (error) {
            setMessage('Error updating item');
        }
    };

    return (
        <div>
            <h2>Update Item</h2>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                    fetchItem(e.target.value);
                }}
                required
            />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => setItem({ ...item, description: e.target.value })}
                    required
                />
                <button type="submit">Update</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateItem;