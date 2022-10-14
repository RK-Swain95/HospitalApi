const express= require('express');
const app= express();

const port=process.env.PORT || 8002;
const passport=require('passport');
const db=require('./config/mongoose');

const passportJWT=require('./config/passport.jwt.strategy');

app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
app.use('/',require('./routes/index'));



app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("server is running on port: ", port);
})