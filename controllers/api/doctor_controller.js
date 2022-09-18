const Doctor=require('../../models/doctors');
const jwt = require('jsonwebtoken');

//to create registration for doctors
module.exports.create= function(req,res){
    Doctor.findOne({username:req.body.username},function(err,doctor){
        if(err){
            return res.status(500).json({
                messsage:"error in database !!"});
        }
        //if doctor is not in db
        if(!doctor){
            Doctor.create(req.body);
            return res.status(200).json({
                messsage:"doctor registration successful"
            });
            //if doctor already present
        }else{
            return res.status(200).json({
                messsage : "username already exist"
            });
        }
    })
}


//log in 
module.exports.createSession=function(req,res){
    Doctor.findOne({username:req.body.username},function(err,doctor){
        if(err){
            return res.status(500).json({
                messsage:"Internal Server Error"
            });
        }
        //if doctor is not found 
        if(!doctor || doctor.password!= req.body.password){
            return res.status(422).json({
                messsage:"Invalid username and password !!"
            });
            //if doctor is found
        }else{
            return res.json(200,{
                message:"log in successfully keeep the token safe !!",
                //generating the token
                data:{
                    token:jwt.sign(doctor.toJSON(),'hospital',{expiresIn:'1000000'})
                }
            });
        }});
        }
    