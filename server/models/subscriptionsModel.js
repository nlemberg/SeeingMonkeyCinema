const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    memberID: { type: mongoose.Schema.Types.ObjectId, ref: "member", required: true },
    moviesWatched: [{
        movieID: { type: mongoose.Schema.Types.ObjectId, ref: "movie", required: true }, 
        dateWatched: { type: Date, required: true }
    }]
})

module.exports = mongoose.model("subscription", subscriptionSchema);