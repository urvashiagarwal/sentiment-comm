const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://urvashiagarwalcse129:urvashi@ecomm-cluster.rr7kh08.mongodb.net/comments-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

