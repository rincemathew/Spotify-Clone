const express = require("express");
const passport = require("passport");
const router = express.Router();
const Song = require("../models/songs")


router.post("/create",passport.authenticate("user"),async(req,res)=>{
    const {name,tumbnail,track} = req.body;
    if(!name || !tumbnail || !track) {
        return res.status(301).json({error:"Insufficient details to create songs"})
    }
    const artist = req.user._id;
    const songDetails = {name, tumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
})

module.exports = router