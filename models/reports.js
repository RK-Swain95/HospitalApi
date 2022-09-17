const mongoose =require('mongoose');

const reportSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients',
        required:true
    },
    DoctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

const Report =mongoose.model('Report',reportSchema);
module.exports=Report;