import express from "express";

// import cros from "cros";

import connectDB from "./database/connections.js";
// Importing dotenv
import dotenv from "dotenv";
dotenv.config();

const app = express();
//  It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// creating responce for home routs
app.get("/", (req, res) => {
    res.status(200).json("Sucessfully connected");
});

const startserver = async () => {
    await connectDB();
    //  starting server
    app.listen(process.env.PORT, () => {
        console.log(`Server Rur at ${process.env.PORT}`);
    });
};
startserver();