// required library modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// required my routes
const avik = require("./routes/avik");
// const sample = "";

// database configuration
const connectDB = require("./config/db");
connectDB();

// // use my controllers
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", avik);
// app.use("/test", sample)

app.listen(7000, () => {
    console.log("Server is running on port ", 7000);
});


