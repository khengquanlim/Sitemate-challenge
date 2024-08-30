const itemModel = require('../models/itemModel');

const createItem = (req, res) => {
    const item = itemModel.addItem(req.body);
    console.log('Create:', item);
    res.status(201).json({ message: 'Item created successfully', data: item });
};

const readItems = (req, res) => {
    const items = itemModel.getItems();
    console.log('Read:', items);
    res.json(items);
};

const updateItem = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = itemModel.updateItem(id, req.body);
    if (updatedItem) {
        console.log('Update:', updatedItem);
        res.json({ message: 'Item updated successfully', data: updatedItem });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

const deleteItem = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedId = itemModel.deleteItem(id);
    console.log('Delete:', deletedId);
    res.json({ message: 'Item deleted successfully', id: deletedId });
};

module.exports = { createItem, readItems, updateItem, deleteItem };