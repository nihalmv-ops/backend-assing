const inventory = require("../model/inventoryData");

// 1. Add new inventory item
const addItem = (req, res) => {
    const { name, category, quantity, price } = req.body;

    const newItem = {
        id: Date.now(),
        name,
        category,
        quantity,
        price
    };

    inventory.push(newItem);

    res.status(201).json({
        success: true,
        message: "Item added successfully",
        data: newItem
    });
};

// 2. Get all inventory items
// Get all items, filter and search
const getAllItems = (req, res) => {

    let result = [...inventory];

    const { category, search, minQuantity, maxQuantity } = req.query;

    // Filter by category
    if (category) {
        result = result.filter(item =>
            item.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Search by item name
    if (search) {
        result = result.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Filter by minimum quantity
    if (minQuantity !== undefined) {
        result = result.filter(item =>
            item.quantity >= Number(minQuantity)
        );
    }

    // Filter by maximum quantity
    if (maxQuantity !== undefined) {
        result = result.filter(item =>
            item.quantity <= Number(maxQuantity)
        );
    }

    res.status(200).json({
        success: true,
        count: result.length,
        data: result
    });
};

// 3. Get single item by ID
const getItemById = (req, res) => {
    const id = Number(req.params.id);

    const item = inventory.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    res.status(200).json({
        success: true,
        data: item
    });
};

// 4. Update inventory item
const updateItem = (req, res) => {
    const id = Number(req.params.id);

    const index = inventory.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    inventory[index] = {
        ...inventory[index],
        ...req.body,
        id
    };

    res.status(200).json({
        success: true,
        message: "Item updated successfully",
        data: inventory[index]
    });
};

// 5. Delete inventory item
const deleteItem = (req, res) => {
    const id = Number(req.params.id);

    const index = inventory.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    const deletedItem = inventory.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Item deleted successfully",
        data: deletedItem[0]
    });
};

module.exports = {
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};