const validateQuery = (req, res, next) => {

    const { minQuantity, maxQuantity } = req.query;

    if (
        minQuantity !== undefined &&
        (!Number.isFinite(Number(minQuantity)) || Number(minQuantity) < 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid minimum quantity"
        });
    }

    if (
        maxQuantity !== undefined &&
        (!Number.isFinite(Number(maxQuantity)) || Number(maxQuantity) < 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid maximum quantity"
        });
    }

    if (
        minQuantity !== undefined &&
        maxQuantity !== undefined &&
        Number(minQuantity) > Number(maxQuantity)
    ) {
        return res.status(400).json({
            success: false,
            message: "Minimum quantity cannot exceed maximum quantity"
        });
    }

    next();
};

module.exports = validateQuery;
