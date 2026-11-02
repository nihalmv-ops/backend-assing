const express = require("express");

const router = express.Router();

const {
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
} = require("../controllers/inventoryController");
const validateQuery = require("../middleware/queryValidation");

// Add item
router.post("/", addItem);

// Get all items
router.get("/", getAllItems);

// Get single item
router.get("/:id", getItemById);

// Update item
router.put("/:id", updateItem);

// Delete item
router.delete("/:id", deleteItem);

module.exports = router;