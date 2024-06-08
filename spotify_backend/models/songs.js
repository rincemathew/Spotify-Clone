const mongoose = require("mongoose");

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref:"users"
    },
});

const songModel = mongoose.model("songs", Song);

modulel.exports = songModel;