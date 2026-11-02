const express = require("express");
const cors = require("cors");
require("dotenv").config();

const inventoryRoutes = require("./routes/inventoryRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Inventory Management API is running"
    });
});

// Inventory routes
app.use("/api/inventory", inventoryRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Centralized error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});