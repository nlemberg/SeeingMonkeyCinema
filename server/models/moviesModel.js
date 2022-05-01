const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: { type: String, required: true },
    genres: [{ type: String, required: true }],
    image: {medium: { type: String, required: true }},
    premiered: { type: Date, required: true },
})

module.exports = mongoose.model("movie", movieSchema);