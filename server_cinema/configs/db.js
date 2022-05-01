const mongoose = require("mongoose");

const connectEmployeeLoginDB = () => {
    const uri = "mongodb://localhost:27017/employeeLoginDB";
    mongoose.connect(uri);
}

module.exports = connectEmployeeLoginDB;