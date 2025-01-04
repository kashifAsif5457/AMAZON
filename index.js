import express from "express";
import cors from "cors"; // Updated to use 'import'
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectdb from "./Database/conection.js";
import router from "./routing/routing.js";
import sentMail from "./frontend/vite-project/src/user Management/signup/gmail/gmail.js";
dotenv.config();
connectdb();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/v1', router);
app.post('/', (req, res) => {
    res.send("Hello world");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
