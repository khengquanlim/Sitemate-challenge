let items = [];
let nextId = 1;

const getItems = () => items;
const addItem = (item) => {
    const newItem = { id: nextId++, ...item };
    items.push(newItem);
    return newItem;
};
const updateItem = (id, item) => {
    items = items.map(existingItem => 
        existingItem.id === id ? { id, ...item } : existingItem
    );
    return items.find(existingItem => existingItem.id === id);
};
const deleteItem = (id) => {
    items = items.filter(item => item.id !== id);
    return id;
};

module.exports = { getItems, addItem, updateItem, deleteItem };