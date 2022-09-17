const express= require('express');
const app= express();

const port=process.env.PORT || 8000;
const db=require('./config/mongoose');


app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/index'));



app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("server is running on port: ", port);
})