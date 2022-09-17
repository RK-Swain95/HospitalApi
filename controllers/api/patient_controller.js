const Patient=require('../../models/patients');
const Doctor=require('../../models/doctors');
const Report=require('../../models/reports');


//to Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
module.exports.create= async function(req,res){
    try{
        //finding the patient 
        let patient=await Patient.findOne({PhoneNo:req.body.PhoneNo});
        //if not found thn create 
        if(!patient){
           Patient.create(req.body,function(err,pati){
                if(err){
                    return res.json(500,{
                        message:"error in finding patient !!"
                    });
                }
                return res.json(200,{
                  message:"patient created  successfully",
                  patient_Id:pati._id
                });
            });
            
        }else{
            return res.json(200,{
                message:"patient already exist",
                patient_Id:patient._id
            });
        }

    }catch(err){
        return res.json(500,{
            message:"error in finding patient !!"
        });
    }
   
    
}
//TO CREATE PATIENT REPORT
module.exports.createReport= async function(req,res){
    try{
        //find doctor and patient from db and params
        let doctor= await Doctor.findById(req.body.DoctorId);
        let patient= await Patient.findById(req.params.id);
        //if not found
        if(!patient || !doctor){
            return res.json(200,{
                message:"Invaid patient Id or doctor id !!"
            });
        }else{
            //if found both then create report
            Report.create({
                patientId:req.params.id,
                DoctorId:req.body.DoctorId,
                status: req.body.status,
                date:req.body.date
            });
            return res.json(200,{
                message:"patient report created  successfully"
            });
        }

    }catch(err){
        return res.json(500,{
            message:"error in finding patient"
        });
    }
}

// find patient report by status
module.exports.allReports=async function(req,res){
    try{

        let patient=await Patient.findById(req.params.id)
        //if patient not found by status
        if(!patient){
            return res.json(200,{
                message:"Invaid patient Id"
            });
        }else{
            //if patient found show report
            let reports=await Report.find({patientId:req.params.id});
            return res.json(200,{
                message:"lists os posts",
                patient_reports:reports
            })

        }


    }catch(err){
        return res.json(500,{
            message:"error in finding patient"
        });
    }
    
}