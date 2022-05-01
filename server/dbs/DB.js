const mongoose = require("mongoose");

const connectSubscriptionsDB = () => {
    const uri = "mongodb://localhost:27017/subscriptionsDB";
    mongoose.connect(uri);
}

module.exports = connectSubscriptionsDB;