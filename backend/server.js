
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Product Routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

// Home API
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Prem Enterprises Backend is Running!",
    });
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "PM Brand API Connected Successfully!",
    });
});

// MongoDB Connection
const MONGO_URI =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/prem_enterprises";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
