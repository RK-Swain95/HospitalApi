const mongoose =require('mongoose');

const patientSchema=new mongoose.Schema({
    PhoneNo:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Patient =mongoose.model('Patient',patientSchema);
module.exports=Patient;