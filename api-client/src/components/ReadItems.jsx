import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../services/apiService.jsx';

const ReadItems = () => {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const data = await getItems();
            setItems(data);
        } catch (error) {
            setMessage('You have to create any items! Please proceed to ');
        }
    };

    return (
        <div className="crud-container">
            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.description}
                    </li>
                ))}
            </ul>
            {message && (
                <div>
                    {message} <Link to="/create">Create Item</Link>.
                </div>
            )}
        </div>
    );
};

export default ReadItems;