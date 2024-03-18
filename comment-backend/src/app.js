const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Comment = require("./modules/comment");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");

// // Middleware to log raw request body
// app.use((req, res, next) => {
//     let rawData = '';
//     req.setEncoding('utf8');
//     req.on('data', (chunk) => { rawData += chunk; });
//     req.on('end', () => {
//         console.log('Raw Request Body:', rawData);
//         next();
//     });
// });


// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint to fetch comments
app.get("/comments/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const commentsData = await Comment.find({ productId });
        res.json(commentsData);
    } catch (err) {
        console.error("Error fetching comments:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// POST endpoint to create a new comment
app.post("/comments", async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const { comment, productId } = req.body;
        res.status(401).json({ comment: comment });
    } catch (err) {
        console.error("Error creating comment:", err);
        res.status(400).json({ error: "Bad Request" });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
