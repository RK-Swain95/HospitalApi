const passport=require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;


const Doctor=require('../models/doctors');

var opts = {

    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    //decrypted code
    secretOrKey :'hospital'
}

passport.use(new JwtStrategy(opts,function(jwtPayLoad,done){
   // console.log(jwtPayLoad);
    Doctor.findById(jwtPayLoad._id,function(err,doctor){
        if(err){console.log('error in finding the doctor from jwt'); return;}
        if(doctor){
            console.log(doctor);
            return done(null,doctor);
        }else{
            return done(null,false);
        }
    });
    
}));


module.exports=passport;