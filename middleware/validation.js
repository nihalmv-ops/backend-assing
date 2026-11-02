const validateInventory = (req, res, next) => {
    const { name, category, quantity, price } = req.body;

    // Check required fields
    if (!name || !category || quantity === undefined || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Validate name
    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name must be a valid string"
        });
    }

    // Validate category
    if (typeof category !== "string" || category.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Category must be a valid string"
        });
    }

    // Validate quantity
    if (!Number.isInteger(quantity) || quantity < 0) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be a non-negative integer"
        });
    }

    // Validate price
    if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be a non-negative number"
        });
    }

    next();
};

module.exports = validateInventory;