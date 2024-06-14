const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    likedSongs: {
        type: String,
        default: ""
    },
    likedPlayLists: {
        type: String,
        default: ""
    },
    subscribedArtists: {
        type: String,
        default: ""
    }
});

const userModel = mongoose.model("users", User);

module.exports = userModel;