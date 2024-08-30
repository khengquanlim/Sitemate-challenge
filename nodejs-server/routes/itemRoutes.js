const express = require('express');
const ItemModel = require('../models/itemModel');

module.exports = (itemsArray, idCounter) => {
    const router = express.Router();
    const itemModel = new ItemModel();
    itemModel.items = itemsArray;
    itemModel.currentId = idCounter;

    router.post('/create', (req, res) => {
        const newItem = itemModel.create(req.body);
        res.status(201).json({ message: 'Object created successfully', data: newItem });
    });

    router.get('/', (req, res) => {
        res.json(itemModel.read());
    });

    router.get('/:id', (req, res) => {
        const item = itemModel.readById(parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    });

    router.put('/:id', (req, res) => {
        const updatedItem = itemModel.update(parseInt(req.params.id), req.body);
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Object updated successfully', data: updatedItem });
    });

    router.delete('/:id', (req, res) => {
        const deletedItem = itemModel.delete(parseInt(req.params.id));
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Object deleted successfully' });
    });

    return router;
};