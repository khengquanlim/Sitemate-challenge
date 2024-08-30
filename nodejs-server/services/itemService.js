let sampleData = { id: 1, name: 'Sample Item' };

exports.create = (data) => {
    sampleData = { ...sampleData, ...data };
    console.log('Create:', sampleData);
    return sampleData;
};

exports.read = () => {
    return sampleData;
};

exports.update = (data) => {
    sampleData = { ...sampleData, ...data };
    console.log('Update:', sampleData);
    return sampleData;
};

exports.delete = (id) => {
    console.log('Delete:', id);
    sampleData = {};
};