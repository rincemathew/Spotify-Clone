const express = require("express");
const mongoose = require("mongoose");
const app = express();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require("./models/user");
const authRoutes = require("./routes/auth")
const songRoutes = require("./routes/song")
const port = 8000;

require("dotenv").config()

app.use(express.json());

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
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


//temp call
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.use("/auth",authRoutes);
app.use("/song",songRoutes);

app.listen(port,()=>{
    console.log("spotify runs on port "+ port);
});