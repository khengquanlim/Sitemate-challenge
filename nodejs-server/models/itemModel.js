class ItemModel {
    constructor() {
        this.items = [];
        this.currentId = 1;
    }

    create(itemData) {
        const newItem = { id: this.currentId++, ...itemData };
        this.items.push(newItem);
        return newItem;
    }

    read() {
        return this.items;
    }

    readById(id) {
        return this.items.find(item => item.id === id);
    }

    update(id, itemData) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) return null;
        this.items[index] = { id, ...itemData };
        return this.items[index];
    }

    delete(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) return null;
        return this.items.splice(index, 1)[0];
    }
}

module.exports = ItemModel;