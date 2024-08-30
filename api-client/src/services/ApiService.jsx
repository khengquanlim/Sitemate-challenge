const API_URL = 'http://localhost:5001/api';

export const createItem = async (item) => {
    const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return response.json();
};

export const getItems = async () => {
    const response = await fetch(`${API_URL}/read`);
    return response.json();
};

export const getItemById = async (id) => {
    const response = await fetch(`${API_URL}/read/${id}`);
    return response.json();
};

export const updateItem = async (id, item) => {
    const response = await fetch(`${API_URL}/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return response.json();
};

export const deleteItem = async (id) => {
    const response = await fetch(`${API_URL}/delete/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};