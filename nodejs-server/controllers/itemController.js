const itemService = require('../services/itemService');

exports.createItem = (req, res) => {
    const item = itemService.create(req.body);
    res.status(201).json({ message: 'Object created successfully', data: item });
};

exports.readItem = (req, res) => {
    const item = itemService.read();
    res.json(item);
};

exports.updateItem = (req, res) => {
    const updatedItem = itemService.update(req.body);
    res.json({ message: 'Object updated successfully', data: updatedItem });
};

exports.deleteItem = (req, res) => {
    itemService.delete(req.body.id);
    res.json({ message: 'Object deleted successfully' });
};