const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: false },
    createdAt: { type: Date, immutable: true }
},
{ timestamps: { createdAt: true, updatedAt: false } })

module.exports = mongoose.model("employee", employeeSchema);