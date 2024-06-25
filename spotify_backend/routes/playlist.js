const express = require("express");
const passport = require("passport");
const router = express.Router();
const Song = require("../models/songs");
const User = require("../models/user");
const Playlist = require("../models/playList")

//create playlist
router.post("/create", passport.authenticate("jwt", {session:false}), async(req,res)=>{
    const currentuser = req.user;
    const {name, thumbnail, songs} = req.body;
    if(!name || !thumbnail || !songs) {
        return res.status(301).json({error:"Insufficient data"})
    }
    const playlistData = {name, thumbnail, songs, owner:currentuser._id,collaborators:[]}
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist)
});

//get a playlist by id
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", {session:false}), async(req,res)=>{
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({_id:playlistId}).populate({
        path:"songs",
        populate:{
            path:'artist'
        }
    });
    if(!playlist) {
        return res.status(301).json({error:"Invalid id"});
    }
    return res.status(200).json(playlist);
});

router.get(
    "/get/me",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const artistId = req.user._id;

        const playlists = await Playlist.find({owner: artistId}).populate(
            "owner"
        );
        return res.status(200).json({data: playlists});
    }
);


//get all playlists made by an artist
router.get("/get/artist/:artistId", passport.authenticate("jwt", {session:false}), async(req,res)=>{
    const artistId = req.params.artistId;
    const artist = await User.findOne({_id:artistId});
    if(!artist) {
        return res.status(304).json({error:"Invalid Artist ID"});
    }
    const playlists = await Playlist.find({owner:artistId});
    return res.status(200).json({data:playlists})
});


//add songs to playlist
router.post("/add/song", passport.authenticate("jwt", {session:false}), async(req,res)=>{
    const currentUser = req.user;
    const {playlistId, songId} = req.body;
    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist) {
        return res.status(304).json({error:"Playlist does not exist"});
    }
    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)) {
        return res.status(400).json({error:"Not allowed"})
    }
    const song = await Song.findOne({_id:songId});
    if(!song) {
        return res.status(304).json({error:"Song does not exist"});
    }
    playlist.songs.push(songId);
    await playlist.save();
    return res.status(200).json(playlist);
});


module.exports = router;