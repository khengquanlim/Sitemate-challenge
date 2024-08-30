import React, { useState } from 'react';
import { createItem } from '../services/ApiService.jsx';

const CreateItem = () => {
    const [item, setItem] = useState({ name: '', description: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createItem(item);
            setItem({ name: '', description: '' });
            setMessage('Item created successfully');
        } catch (error) {
            setMessage('Error creating item');
        }
    };

    return (
        <div>
            <h2>Create Item</h2>
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
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateItem;