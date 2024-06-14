const mongoose = require("mongoose");

const PlayList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"users"
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref:"songs"
    }],
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref:"users"
    }],
});

const playListModel = mongoose.model("playlists", PlayList);

module.exports = playListModel;