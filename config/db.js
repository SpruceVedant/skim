require('dotenv').config();
const mongoose = require('mongoose');
// const URL = process.env.MONGO_CONNECTION_URL;
function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB')
        });
}

module.exports = connectDB;