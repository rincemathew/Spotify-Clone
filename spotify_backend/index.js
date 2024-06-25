const express = require("express");
const mongoose = require("mongoose");
const app = express();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require("./models/user");
const authRoutes = require("./routes/auth")
const songRoutes = require("./routes/song")
const playlistRoutes = require("./routes/playlist")
const port = 8000;
const cors = require('cors');

require("dotenv").config()

app.use(express.json());
app.use(cors())

//mongoose connection
mongoose.connect(process.env.MONGO_DB,{
}).then((x)=>{
    console.log("MongoDb connected.....")
}).catch((error)=>{
    console.log("MongoDB not Connected" + error.message)
})

//passport jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'qazpc';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    try {
        const user = await User.findOne({_id: jwt_payload.identifier});
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
            
    //     }
    // });
}));


//temp call
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);

app.listen(port,()=>{
    console.log("spotify runs on port "+ port);
});