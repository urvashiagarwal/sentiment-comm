const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Comment = require("./modules/comment");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");

app.use(cors());
app.use(express.json());

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

app.post("/comments", async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const { comment, productId } = req.body;
        // Assuming `Comment` is your Mongoose model, create a new instance and save it
        const newComment = new Comment({ comment, productId });
        await newComment.save();
        res.status(201).json({ message: "Comment created successfully" });
    } catch (err) {
        console.error("Error creating comment:", err);
        res.status(400).json({ error: "Bad Request" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
