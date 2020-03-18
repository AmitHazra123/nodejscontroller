const mongoose = require("mongoose");

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.FOODHUNGRY_DB_CONN_STRING, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;